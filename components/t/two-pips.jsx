import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ik25qgb5m.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ik25qgb5m"/>`,
		"fallback": "pinhead:two-pips",
	});
}

export default Component;
