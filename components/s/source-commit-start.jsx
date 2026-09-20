import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qzh07nbmz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qzh07nbmz"/>`,
		"fallback": "mdi:source-commit-start",
	});
}

export default Component;
