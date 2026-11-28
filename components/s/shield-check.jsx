import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ofg_qd6-b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ofg_qd6-b"/>`,
		"fallback": "noviair:shield-check",
	});
}

export default Component;
