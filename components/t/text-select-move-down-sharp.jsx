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
		"content": `<style>.v2wzwhbsv {
  fill: currentColor;
  d: path("M4 5V4h16v1zm8 11.308L8.692 13l.708-.708l2.1 2.075V7.5h1v6.867l2.1-2.075l.708.708zM4 20v-1h16v1z");
}
</style><path class="v2wzwhbsv"/>`,
		"fallback": "material-symbols-light:text-select-move-down-sharp",
	});
}

export default Component;
