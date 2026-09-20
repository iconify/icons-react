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
		"content": `<style>.l--2hsb_e {
  fill: currentColor;
  d: path("M10.23 20.772q-.73-.729-.73-1.77t.729-1.771t1.769-.731t1.771.729t.731 1.769t-.728 1.771t-1.77.731t-1.771-.728M11.5 14V5.133L8.4 8.189L7.711 7.5L12 3.212L16.288 7.5l-.713.689L12.5 5.114V14z");
}
</style><path class="l--2hsb_e"/>`,
		"fallback": "material-symbols-light:step-out",
	});
}

export default Component;
