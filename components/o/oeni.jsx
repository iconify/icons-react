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
		"content": `<style>.ekjgikvcl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M6.693 21.45c19.79 9.406 31.513 1.24 33.548.558c7.056-2.363-2.072 20.958-16.206 20.49C5.311 41.877 4.116 20.226 6.693 21.45");
}

.nypdm9eoi {
  cx: 24.035px;
  cy: 14.107px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 17.343px;
  ry: 7.345px;
}
</style><ellipse class="nypdm9eoi"/><path class="ekjgikvcl"/>`,
		"fallback": "arcticons:oeni",
	});
}

export default Component;
