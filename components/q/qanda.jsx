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
		"content": `<style>.gsx0jxbsl {
  cx: 24.179px;
  cy: 24.019px;
  r: 8.046px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.jxje-cb2b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M33.435 43.324c-10.664 5.203-23.527.776-28.73-9.889s-.776-23.528 9.889-28.73C25.258-.5 38.12 3.928 43.324 14.593a21.49 21.49 0 0 1 .001 18.84");
}

.vi_nxfq0r {
  cx: 38.5px;
  cy: 38.5px;
  r: 7px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><path class="jxje-cb2b"/><circle class="gsx0jxbsl"/><circle class="vi_nxfq0r"/>`,
		"fallback": "arcticons:qanda",
	});
}

export default Component;
