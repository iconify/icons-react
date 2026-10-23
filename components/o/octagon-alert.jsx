import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sj9s4025x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sj9s4025x"/>`,
		"fallback": "vadivam:octagon-alert",
	});
}

export default Component;
