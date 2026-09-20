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
		"content": `<style>.bt2s27bab {
  fill: currentColor;
  d: path("M10.577 11.423Q10 10.846 10 10t.577-1.423T12 8t1.423.577T14 10t-.577 1.423T12 12t-1.423-.577M7 21.462v-6.59q-.95-.935-1.475-2.19Q5 11.43 5 10q0-2.927 2.036-4.963T12 3t4.964 2.036T19 10q0 1.429-.525 2.683T17 14.87v6.59l-5-1.5zm9.25-7.212Q18 12.5 18 10t-1.75-4.25T12 4T7.75 5.75T6 10t1.75 4.25T12 16t4.25-1.75");
}
</style><path class="bt2s27bab"/>`,
		"fallback": "material-symbols-light:license-sharp",
	});
}

export default Component;
