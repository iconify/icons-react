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
		"content": `<style>.nl3htkb-a {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M20.214 20.745c6.36-2.51 9.86-3.2 16.419-4.036M14.297 34.184c6.558-4.529 17.158-7.187 28.203-8.22m-18.046 15.85c5.572-3.052 12.03-4.48 18.046-5.465m-37-20.424V6.706l4.615 9.229L14.73 6.72v9.215");
}

.nzcvy0sag {
  cx: 17.408px;
  cy: 6.936px;
  r: 0.75px;
  fill: currentColor;
}

.vdqharb3n {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M17.408 9.763v6.115");
}
</style><path class="nl3htkb-a"/><circle class="nzcvy0sag"/><path class="vdqharb3n"/>`,
		"fallback": "arcticons:mi-bancolombia",
	});
}

export default Component;
