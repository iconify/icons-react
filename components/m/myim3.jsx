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
		"content": `<style>.hvyrc0bzp {
  cx: 20.532px;
  cy: 27.468px;
  r: 15.032px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.ly61bjbob {
  cx: 35.982px;
  cy: 12.018px;
  r: 6.518px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><circle class="hvyrc0bzp"/><circle class="ly61bjbob"/>`,
		"fallback": "arcticons:myim3",
	});
}

export default Component;
