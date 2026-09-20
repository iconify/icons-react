import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cpa8pybnw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cpa8pybnw"/>`,
		"fallback": "mage:robot-sad-fill",
	});
}

export default Component;
