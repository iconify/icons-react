import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ls8ogociq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ls8ogociq"/>`,
		"fallback": "vadivam:merge",
	});
}

export default Component;
