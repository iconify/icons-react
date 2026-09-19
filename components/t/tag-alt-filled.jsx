import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/ha_zp6bnd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ha_zp6bnd"/>`,
		"fallback": "boxicons:tag-alt-filled",
	});
}

export default Component;
