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
		"content": `<style>.x-kz1kb7j {
  fill: var(--svg-color--3b88c3, #3b88c3);
  d: path("M36 32a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4z");
}

.z47h3obmw {
  fill: var(--svg-color--fff, #fff);
  d: path("M9.057 9.312c0-1.427.992-2.388 2.387-2.388h5.147c6.946 0 10.915 4.465 10.915 11.348C27.506 24.783 23.289 29 16.901 29h-5.395c-1.023 0-2.449-.559-2.449-2.325zm4.651 15.409h3.132c4 0 5.829-2.945 5.829-6.666c0-3.969-1.859-6.852-6.139-6.852h-2.822z");
}
</style><path class="x-kz1kb7j"/><path class="z47h3obmw"/>`,
		"fallback": "twemoji:letter-d",
	});
}

export default Component;
