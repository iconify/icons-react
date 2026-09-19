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
		"content": `<style>.raz7z3b8f {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m5.5 12.962l11.775 7.149L42.5 5.508m-37 18.644l11.775 7.149L42.5 16.699m-37 18.643l11.775 7.15L42.5 27.889");
}
</style><path class="raz7z3b8f"/>`,
		"fallback": "arcticons:todoist",
	});
}

export default Component;
