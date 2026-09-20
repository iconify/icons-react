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

.xf2k4pabt {
  fill: var(--svg-color--fff, #fff);
  d: path("M20.357 11.203H12.42c-1.674 0-2.294-1.085-2.294-2.139c0-1.085.589-2.14 2.294-2.14h11.224c1.582 0 2.233 1.426 2.233 2.232c0 .62-.341 1.271-.713 2.046l-7.69 15.627c-.868 1.736-1.209 2.355-2.604 2.355c-1.705 0-2.574-1.302-2.574-2.201c0-.372.093-.65.311-1.085z");
}
</style><path class="x-kz1kb7j"/><path class="xf2k4pabt"/>`,
		"fallback": "twemoji:keycap-7",
	});
}

export default Component;
