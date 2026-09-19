import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g_z9j80rp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="g_z9j80rp"/>`,
		"fallback": "griddy-icons:tooth-crown",
	});
}

export default Component;
