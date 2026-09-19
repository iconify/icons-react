import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aw4v21b9v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aw4v21b9v"/>`,
		"fallback": "bxl:paper-design",
	});
}

export default Component;
