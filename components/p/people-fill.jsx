import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rnrq_6d0d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rnrq_6d0d"/>`,
		"fallback": "eva:people-fill",
	});
}

export default Component;
