import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.mquyb0b-y {
  fill: var(--svg-color--fff, #fff);
  d: path("M24.281 24.907c1.301 0 2.232.713 2.232 2.046c0 1.179-1.117 2.047-2.232 2.047H12.095c-1.643 0-2.604-.93-2.604-2.232c0-.62.217-1.24.62-1.799l9.984-13.952H11.94c-1.24 0-2.17-.713-2.17-1.984c0-1.178.992-2.108 2.17-2.108h11.349c1.797 0 2.603 1.147 2.603 2.232c0 .682-.279 1.457-.682 1.984l-9.922 13.767h8.993z");
}

.x-kz1kb7j {
  fill: var(--svg-color--3b88c3, #3b88c3);
  d: path("M36 32a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4z");
}
</style><path class="x-kz1kb7j"/><path class="mquyb0b-y"/>`,
		"fallback": "twemoji:letter-z",
	});
}

export default Component;
