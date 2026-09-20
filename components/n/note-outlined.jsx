import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hov8pmbzf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hov8pmbzf"/>`,
		"fallback": "weui:note-outlined",
	});
}

export default Component;
