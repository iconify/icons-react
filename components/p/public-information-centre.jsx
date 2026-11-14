import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.jdyf1g44l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 19.25v-8.385a1.75 1.75 0 0 1 .687-1.39l6.75-5.162a1.75 1.75 0 0 1 2.126 0l6.75 5.162a1.75 1.75 0 0 1 .687 1.39v8.385A1.75 1.75 0 0 1 18.75 21H5.25a1.75 1.75 0 0 1-1.75-1.75M12 10.5h.01m-.01 3V18");
}
</style><path class="jdyf1g44l"/>`,
		"fallback": "uix:public-information-centre",
	});
}

export default Component;
