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
		"content": `<style>.mwm320bqt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M23.98 5.945L4.5 24.968h5.571v17.087h9.296V30.232h9.266v11.823h9.296V24.968H43.5z");
}
</style><path class="mwm320bqt"/>`,
		"fallback": "arcticons:shade",
	});
}

export default Component;
