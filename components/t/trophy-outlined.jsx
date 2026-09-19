import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pj2nowpcr.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pj2nowpcr"/>`,
		"fallback": "ant-design:trophy-outlined",
	});
}

export default Component;
