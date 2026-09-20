import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kf-qzbccd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kf-qzbccd"/>`,
		"fallback": "thesvg-color:libreoffice-calc",
	});
}

export default Component;
