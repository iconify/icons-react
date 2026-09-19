import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qqgpeml1y.css';

const viewBox = {"width":20,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qqgpeml1y"/>`,
		"fallback": "fontisto:undo",
	});
}

export default Component;
