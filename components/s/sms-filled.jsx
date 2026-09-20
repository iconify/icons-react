import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/npfc-cbkr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="npfc-cbkr"/>`,
		"fallback": "reicon:sms-filled",
	});
}

export default Component;
