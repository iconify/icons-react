import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yaq65jbqm.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yaq65jbqm"/>`,
		"fallback": "streamline:interface-edit-flip-bottom-flip-bottom-object-work",
	});
}

export default Component;
