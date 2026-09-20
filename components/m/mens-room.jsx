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
		"content": `<style>.fw2mwpbza {
  fill: var(--svg-color--fff, #fff);
  d: path("m26.795 15.727l-7.041-4.4C20.506 10.691 21 9.666 21 8.5C21 6.566 19.656 5 18 5c-1.657 0-3 1.567-3 3.5c0 1.166.494 2.192 1.246 2.828l-7.041 4.4a1.5 1.5 0 1 0 1.59 2.544L14 16.268V31.5a1.5 1.5 0 1 0 3 0V24a1 1 0 1 1 2 0v7.5a1.5 1.5 0 0 0 3 0V16.269l3.205 2.003a1.5 1.5 0 1 0 1.59-2.545");
}

.r9rioofmx {
  fill: var(--svg-color--269, #269);
  d: path("M36 32a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4z");
}
</style><path class="r9rioofmx"/><path class="fw2mwpbza"/>`,
		"fallback": "twemoji:mens-room",
	});
}

export default Component;
