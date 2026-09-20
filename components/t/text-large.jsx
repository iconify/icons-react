import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hz00_cbco.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hz00_cbco"/>`,
		"fallback": "proicons:text-large",
	});
}

export default Component;
