import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hx2uz1-fm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hx2uz1-fm"/>`,
		"fallback": "withicons:loader-circle-duo",
	});
}

export default Component;
