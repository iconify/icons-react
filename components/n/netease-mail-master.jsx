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
		"content": `<style>.br27u13qx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m17.666 7.354l-3.527 25.299M7.945 15.117L5.5 32.653m37-17.536l-2.445 17.536M25.222 15.117l-2.445 17.536m11.084-17.536l-3.559 25.529");
}
</style><path class="br27u13qx"/>`,
		"fallback": "arcticons:netease-mail-master",
	});
}

export default Component;
