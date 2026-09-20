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
		"content": `<style>.bk5j_tb7n {
  fill: currentColor;
  d: path("M208 36H48a12 12 0 0 0-12 12v160a12 12 0 0 0 12 12h160a12 12 0 0 0 12-12V48a12 12 0 0 0-12-12M76 44h32v96H76Zm36 104a4 4 0 0 0 4-4V44h24v100a4 4 0 0 0 4 4h12v64h-56v-64Zm36-8V44h32v96ZM44 208V48a4 4 0 0 1 4-4h20v100a4 4 0 0 0 4 4h20v64H48a4 4 0 0 1-4-4m168 0a4 4 0 0 1-4 4h-44v-64h20a4 4 0 0 0 4-4V44h20a4 4 0 0 1 4 4Z");
}
</style><path class="bk5j_tb7n"/>`,
		"fallback": "ph:piano-keys-thin",
	});
}

export default Component;
