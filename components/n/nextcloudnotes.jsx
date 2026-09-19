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
		"content": `<style>.vzrj8oblu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M32.272 12.416L39.188 5.5H9.5a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4V15.834l-3.405 3.406m-6.823-6.824l6.823 6.824l-11.803 11.803l-10.264 3.44l3.44-10.263z");
}
</style><path class="vzrj8oblu"/>`,
		"fallback": "arcticons:nextcloudnotes",
	});
}

export default Component;
