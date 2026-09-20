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
		"content": `<style>.t1qmydbom {
  fill: currentColor;
  d: path("M3 17.039V6.961h10.077v10.077zm12.808-8.847v-1.23h1.23v1.23zm0 8.846v-1.23h1.23v1.23zm3.961-8.846v-1.23H21v1.23zm0 4.423v-1.23H21v1.23zm0 4.423v-1.23H21v1.23z");
}
</style><path class="t1qmydbom"/>`,
		"fallback": "material-symbols-light:move-selection-left",
	});
}

export default Component;
