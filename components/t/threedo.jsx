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

.t7mo2jb6h {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m18.209 23.293l7.065 7.113L38 17.594m-23.896 5.699l7.066 7.113m4.104-4.132l8.622-8.68m-10.674 6.614l6.57-6.614M10 23.293l7.065 7.113");
}
</style><path class="t7mo2jb6h"/><circle class="cpk0fnbgt"/>`,
		"fallback": "arcticons:threedo",
	});
}

export default Component;
