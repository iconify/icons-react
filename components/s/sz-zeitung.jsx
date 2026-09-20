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

.tlnnkebri {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M12.802 29.954c.935 1.218 2.108 1.671 3.739 1.671h2.258a3.804 3.804 0 0 0 3.804-3.804v-.017A3.805 3.805 0 0 0 18.799 24h-2.49a3.81 3.81 0 0 1-3.809-3.808a3.816 3.816 0 0 1 3.817-3.817h2.245c1.631 0 2.804.454 3.739 1.67m3.312-1.507H35.5l-9.887 14.924H35.5");
}
</style><path class="i9clfwm2k"/><path class="tlnnkebri"/>`,
		"fallback": "arcticons:sz-zeitung",
	});
}

export default Component;
