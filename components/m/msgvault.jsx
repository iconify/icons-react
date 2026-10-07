import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rod24kbrj.css';
import '../../css/y/y20r2pbei.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rod24kbrj"/><path class="y20r2pbei"/>`,
		"fallback": "selfhst:msgvault",
	});
}

export default Component;
