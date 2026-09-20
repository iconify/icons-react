import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.lt_s6eaip {
  fill: currentColor;
  d: path("M21.068 9a3.932 3.932 0 0 1 2.78 6.712l-7.762 7.763a3.75 3.75 0 0 1-1.64.96l-5.494 1.538a.75.75 0 0 1-.925-.925l1.538-5.493a3.75 3.75 0 0 1 .96-1.64l7.763-7.764A3.93 3.93 0 0 1 21.068 9M8.5 2a.75.75 0 0 1 .693.464l4.493 10.875l-1.15 1.15l-1.233-2.989H5.697l-1.254 3.036a.75.75 0 0 1-1.386-.572l4.75-11.5A.75.75 0 0 1 8.5 2m-2.183 8h4.366L8.5 4.714z");
}
</style><path class="lt_s6eaip"/>`,
		"fallback": "fluent:text-edit-style-28-filled",
	});
}

export default Component;
