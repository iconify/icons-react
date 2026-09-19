import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xoqruktnj.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xoqruktnj"/>`,
		"fallback": "dinkie-icons:open-lock-filled",
	});
}

export default Component;
