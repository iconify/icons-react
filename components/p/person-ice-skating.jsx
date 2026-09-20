import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qqrr_902l.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qqrr_902l"/>`,
		"fallback": "pinhead:person-ice-skating",
	});
}

export default Component;
