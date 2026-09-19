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
		"content": `<style>.ed8hnccqx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M8.09 15.654V5.837c0-.186.14-.337.326-.337h23.759c7.02 0 9.091 6.467 9.091 9.814v6.711m0 0v12.826c0 3.675-3.861 7.649-7.536 7.649H13.578c-3.502 0-6.844-4.147-6.844-7.649v-8.21a.34.34 0 0 1 .342-.337c6.34.032 6.017.903 6-3.938a.34.34 0 0 1 .336-.34z");
}

.ljw7_6bof {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M21.408 26.503c0-.093.075-.169.168-.169h4.073a2.53 2.53 0 0 1 2.528 2.528v6.21a2.53 2.53 0 0 1-2.528 2.528h-1.714a2.53 2.53 0 0 1-2.527-2.528z");
}
</style><path class="ed8hnccqx"/><path class="ljw7_6bof"/>`,
		"fallback": "arcticons:metager",
	});
}

export default Component;
