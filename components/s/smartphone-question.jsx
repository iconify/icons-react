import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oxxs_hbwr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oxxs_hbwr"/>`,
		"fallback": "noviair:smartphone-question",
	});
}

export default Component;
