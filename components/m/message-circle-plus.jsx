import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mqdg6rbyi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mqdg6rbyi"/>`,
		"fallback": "vadivam:message-circle-plus",
	});
}

export default Component;
