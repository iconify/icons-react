import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/woq1ofeof.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="woq1ofeof"/>`,
		"fallback": "cib:nintendo-switch",
	});
}

export default Component;
