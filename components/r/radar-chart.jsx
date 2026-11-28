import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jvcysxk7v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jvcysxk7v"/>`,
		"fallback": "noviair-light:radar-chart",
	});
}

export default Component;
