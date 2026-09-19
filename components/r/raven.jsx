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
		"content": `<style>.nrjuacb9v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m9.638 20.912l2.938-8.296L38.362 5.5l-2.938 8.296zm0 10.794l2.938-8.296l25.786-7.116l-2.938 8.296zm0 10.794l2.938-8.295l25.786-7.117l-2.938 8.296z");
}
</style><path class="nrjuacb9v"/>`,
		"fallback": "arcticons:raven",
	});
}

export default Component;
