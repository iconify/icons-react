import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cv-lqzb4n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cv-lqzb4n"/>`,
		"fallback": "uit:master-card",
	});
}

export default Component;
