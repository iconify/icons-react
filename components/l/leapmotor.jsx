import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/ze7-9joag.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ze7-9joag"/>`,
		"fallback": "cbi:leapmotor",
	});
}

export default Component;
