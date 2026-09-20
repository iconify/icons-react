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
		"content": `<style>.au6-c-b3i {
  fill: currentColor;
  d: path("M12.5 11.5V3.062q3.46.182 5.845 2.58Q20.731 8.04 20.94 11.5zm-.994 9.414q-3.55-.183-5.988-2.758T3.081 12q0-3.606 2.437-6.18t5.988-2.758zm.994 0v-8.42h8.439q-.197 3.44-2.588 5.842q-2.391 2.4-5.851 2.578");
}
</style><path class="au6-c-b3i"/>`,
		"fallback": "material-symbols-light:pie-chart-rounded",
	});
}

export default Component;
