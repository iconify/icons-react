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
		"content": `<style>.d0dw3kb5h {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 26.043s1.87-1.467 3.016-.908c3.841 1.878 5.522 7.548 13.535 3.21c-5.47 9.952-14.18 5.712-16.552 2.228c-2.371 3.483-11.08 7.724-16.55-2.228c8.014 4.338 9.694-1.332 13.535-3.21c1.145-.559 3.015.908 3.015.908");
}

.sfh83sbpj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M6.497 10.73A1.997 1.997 0 0 0 4.5 12.727v22.576A1.997 1.997 0 0 0 6.497 37.3h35.006a1.997 1.997 0 0 0 1.997-1.997V12.697a1.997 1.997 0 0 0-1.997-1.996H6.497ZM43.5 12.697L24 26.067L4.5 12.727");
}
</style><path class="sfh83sbpj"/><path class="d0dw3kb5h"/>`,
		"fallback": "arcticons:monoclesmail-alt",
	});
}

export default Component;
