import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eip9frb-s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eip9frb-s"/>`,
		"fallback": "hugeicons:service",
	});
}

export default Component;
