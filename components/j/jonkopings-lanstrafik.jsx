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
		"content": `<style>.cd_krdbsb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M19.225 24H32.23c3.898 0 7.904 3.16 8.948 7.057l1.175 4.386c1.045 3.897-1.268 7.057-5.166 7.057h-14.82c-3.898 0-7.904-3.16-8.948-7.057L5.396 5.5m8.872 0l3.322 12.401");
}

.gb-azot_f {
  cx: 33.758px;
  cy: 31.208px;
  r: 0.75px;
  fill: currentColor;
}
</style><path class="cd_krdbsb"/><circle class="gb-azot_f"/>`,
		"fallback": "arcticons:jonkopings-lanstrafik",
	});
}

export default Component;
