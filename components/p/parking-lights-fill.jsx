import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/msyf_sb1b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="msyf_sb1b"/>`,
		"fallback": "mingcute:parking-lights-fill",
	});
}

export default Component;
