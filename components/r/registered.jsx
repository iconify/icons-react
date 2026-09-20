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
		"content": `<style>.f1psxk2zb {
  fill: var(--svg-color--31373d, #31373d);
  d: path("M10.777 9.342c0-1.488.837-2.418 2.388-2.418h5.457c4.775 0 7.72 2.14 7.72 7.007c0 3.411-2.573 5.364-5.736 5.86l5.272 5.644c.433.465.619.93.619 1.364c0 1.209-.961 2.387-2.324 2.387c-.559 0-1.303-.217-1.799-.806l-6.883-8.341h-.062v6.728c0 1.551-.992 2.418-2.326 2.418s-2.326-.867-2.326-2.418zm4.651 7.348h3.193c1.705 0 2.884-1.023 2.884-2.759c0-1.767-1.18-2.729-2.884-2.729h-3.193z");
}

.lg3d59uck {
  fill: var(--svg-color--31373d, #31373d);
  d: path("M18 0C8.059 0 0 8.06 0 18c0 9.941 8.059 18 18 18s18-8.059 18-18c0-9.94-8.059-18-18-18m0 34C9.164 34 2 26.837 2 18S9.164 2 18 2s16 7.164 16 16s-7.163 16-16 16");
}
</style><path class="lg3d59uck"/><path class="f1psxk2zb"/>`,
		"fallback": "twemoji:registered",
	});
}

export default Component;
