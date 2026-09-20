import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rkwt02fpw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rkwt02fpw"/>`,
		"fallback": "lets-icons:rename",
	});
}

export default Component;
