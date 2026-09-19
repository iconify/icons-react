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
		"content": `<style>.i9clfwm2k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4");
}

.rq-g39wvf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M12.53 10.31c-1.227 0-2.22.993-2.22 2.218V33.53a2.22 2.22 0 0 0 2.22 2.218h6.845c1.226 0 2.22-.993 2.22-2.218V12.529a2.22 2.22 0 0 0-2.22-2.219zm16.094 0a2.22 2.22 0 0 0-2.22 2.22v11.746a2.22 2.22 0 0 0 2.22 2.221h6.846a2.22 2.22 0 0 0 2.22-2.22V12.53a2.22 2.22 0 0 0-2.22-2.221z");
}
</style><path class="rq-g39wvf"/><path class="i9clfwm2k"/>`,
		"fallback": "arcticons:trello",
	});
}

export default Component;
