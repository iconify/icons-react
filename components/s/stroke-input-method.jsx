import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.cpk0fnbgt {
  cx: 24px;
  cy: 24px;
  r: 21.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.zzvgd61rb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M23.655 11.492v11.446M9.69 21.054h8.783m17.44-7.922c-2.66 3.973-5.089 5.411-7.432 6.731m-11.027 6.249l5.003 10.365m.895-8.824h10.327m-1.859 5.035l1.859-5.035");
}
</style><circle class="cpk0fnbgt"/><path class="zzvgd61rb"/>`,
		"fallback": "arcticons:stroke-input-method",
	});
}

export default Component;
