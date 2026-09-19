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
		"content": `<style>.evc1qhb0j {
  cx: 27.007px;
  cy: 8.83px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 6.127px;
  ry: 4.158px;
}

.sktu0ynsq {
  cx: 27.983px;
  cy: 30.172px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 13.312px;
  ry: 15.347px;
}

.t39qcobba {
  cx: 11.064px;
  cy: 12.074px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 5.979px;
  ry: 7.403px;
}
</style><ellipse transform="rotate(-30.724 11.064 12.074)" class="t39qcobba"/><ellipse transform="rotate(-15.513 27.007 8.83)" class="evc1qhb0j"/><ellipse transform="rotate(-85.227 27.983 30.172)" class="sktu0ynsq"/>`,
		"fallback": "arcticons:logseq",
	});
}

export default Component;
