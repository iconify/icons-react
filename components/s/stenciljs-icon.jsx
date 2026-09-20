import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":197};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.tjy4k5inb {
  d: path("m193.065 138.495l-53.333 58.428H41.599L94.4 138.495zM256 69.248l-53.305 58.427H0l53.305-58.427zM214.399 0l-53.087 58.428h-98.38L116.1 0z");
}
</style><path class="tjy4k5inb"/>`,
		"fallback": "logos:stenciljs-icon",
	});
}

export default Component;
