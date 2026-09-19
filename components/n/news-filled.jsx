import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hq_pm1brj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hq_pm1brj"/>`,
		"fallback": "boxicons:news-filled",
	});
}

export default Component;
