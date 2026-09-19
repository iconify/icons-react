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
		"content": `<style>.at1wsgblf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M2.8 27.584h15.013A7.17 7.17 0 0 0 24 31.168a7.17 7.17 0 0 0 6.188-3.584h7.633A14.33 14.33 0 0 1 24 38.332a14.33 14.33 0 0 1-13.82-10.748m35.019-7.168H30.203A7.17 7.17 0 0 0 24 16.832a7.17 7.17 0 0 0-6.188 3.584H10.18A14.33 14.33 0 0 1 24 9.668a14.33 14.33 0 0 1 13.82 10.748");
}

.cpk0fnbgt {
  cx: 24px;
  cy: 24px;
  r: 21.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><circle class="cpk0fnbgt"/><path class="at1wsgblf"/>`,
		"fallback": "arcticons:share-pro",
	});
}

export default Component;
