import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k4p_kzgss.css';
import '../../css/y/yz_54e91d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k4p_kzgss"/><path class="yz_54e91d"/>`,
		"fallback": "solar:link-square-outline",
	});
}

export default Component;
