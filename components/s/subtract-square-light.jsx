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
		"content": `<style>.bd3fwnnfj {
  fill: currentColor;
  d: path("M216 90h-50V40a6 6 0 0 0-6-6H40a6 6 0 0 0-6 6v120a6 6 0 0 0 6 6h50v50a6 6 0 0 0 6 6h120a6 6 0 0 0 6-6V96a6 6 0 0 0-6-6m-53.52 120l-44-44h39l44 44Zm3.52-52.48v-39l44 44v39Zm44-12L166.48 102H210ZM46 46h108v108H46Zm56 120.48L145.52 210H102Z");
}
</style><path class="bd3fwnnfj"/>`,
		"fallback": "ph:subtract-square-light",
	});
}

export default Component;
