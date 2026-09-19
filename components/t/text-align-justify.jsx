import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ceh5_ab_e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ceh5_ab_e"/>`,
		"fallback": "fe:text-align-justify",
	});
}

export default Component;
