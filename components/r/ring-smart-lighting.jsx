import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/er6g1acjr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="er6g1acjr"/>`,
		"fallback": "cbi:ring-smart-lighting",
	});
}

export default Component;
