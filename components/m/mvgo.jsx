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
		"content": `<style>.fcggsugyz {
  cx: 34.25px;
  cy: 24px;
  r: 10.25px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.hcborccui {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 24c0 5.66-4.59 10.25-10.25 10.25S3.5 29.66 3.5 24s4.59-10.25 10.25-10.25a10.25 10.25 0 0 1 9.055 5.442M13.75 24H24");
}
</style><circle class="fcggsugyz"/><path class="hcborccui"/>`,
		"fallback": "arcticons:mvgo",
	});
}

export default Component;
