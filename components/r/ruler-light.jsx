import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.s4r8_qkpg {
  fill: currentColor;
  d: path("M233.91 74.79L181.22 22.1a14 14 0 0 0-19.8 0L22.09 161.41a14 14 0 0 0 0 19.8l52.69 52.69a14 14 0 0 0 19.8 0L233.91 94.59a14 14 0 0 0 0-19.8m-8.49 11.31L86.1 225.41a2 2 0 0 1-2.83 0l-52.69-52.68a2 2 0 0 1 0-2.83L64 136.48l27.76 27.76a6 6 0 1 0 8.48-8.48L72.48 128L96 104.48l27.76 27.76a6 6 0 0 0 8.48-8.48L104.48 96L128 72.49l27.76 27.75a6 6 0 0 0 8.48-8.48L136.49 64l33.41-33.41a2 2 0 0 1 2.83 0l52.69 52.68a2 2 0 0 1 0 2.83");
}
</style><path class="s4r8_qkpg"/>`,
		"fallback": "ph:ruler-light",
	});
}

export default Component;
