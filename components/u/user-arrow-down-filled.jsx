import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gsu46ub4d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gsu46ub4d"/>`,
		"fallback": "tdesign:user-arrow-down-filled",
	});
}

export default Component;
