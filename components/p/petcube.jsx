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
		"content": `<style>.ed6wi2bdb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m9.105 23.036l2.625-1.497l2.626 4.528m2.898 1.674l2.626-1.497l2.625 4.528");
}

.i_r7xhb3l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m24.003 44.5l17.724-10.229V13.803L23.887 3.5L6.163 13.729v20.468z");
}
</style><path class="i_r7xhb3l"/><path class="ed6wi2bdb"/>`,
		"fallback": "arcticons:petcube",
	});
}

export default Component;
