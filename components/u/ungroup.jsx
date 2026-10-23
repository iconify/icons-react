import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mppp2xb_g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mppp2xb_g"/>`,
		"fallback": "vadivam:ungroup",
	});
}

export default Component;
