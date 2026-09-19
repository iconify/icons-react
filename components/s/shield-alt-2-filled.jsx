import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ih0i_2fow.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ih0i_2fow"/>`,
		"fallback": "boxicons:shield-alt-2-filled",
	});
}

export default Component;
