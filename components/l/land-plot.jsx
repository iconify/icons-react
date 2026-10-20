import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ibda_si-o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ibda_si-o"/>`,
		"fallback": "vadivam:land-plot",
	});
}

export default Component;
