import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.akex1fi2m {
  fill: currentColor;
  d: path("M8 5.137L7.174 6.81l-4.317.627a1 1 0 0 0-.554 1.706l3.124 3.044l-.738 4.3a1.002 1.002 0 0 0 1.038 1.17a1 1 0 0 0 .414-.117L8 16.565z");
}
</style><path class="akex1fi2m"/>`,
		"fallback": "fluent:star-one-quarter-20-filled",
	});
}

export default Component;
