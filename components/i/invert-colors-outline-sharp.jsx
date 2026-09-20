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
		"content": `<style>.t1q8z_cse {
  fill: currentColor;
  d: path("M12 20q-2.921 0-4.96-2.005T5 13.12q0-1.477.558-2.684t1.484-2.193L12 3.384l4.958 4.858q.927.985 1.484 2.221T19 13.12q0 2.872-2.04 4.876T12 20m0-1V4.8L7.75 9q-.875.825-1.312 1.872T6 13.119q0 2.425 1.75 4.153T12 19");
}
</style><path class="t1q8z_cse"/>`,
		"fallback": "material-symbols-light:invert-colors-outline-sharp",
	});
}

export default Component;
