import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jdvu4gb8k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jdvu4gb8k"/>`,
		"fallback": "healthicons:penis-outline-24px",
	});
}

export default Component;
