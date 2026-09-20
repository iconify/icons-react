import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sznq_fb2c.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sznq_fb2c"/>`,
		"fallback": "oui:minus-in-circle-filled",
	});
}

export default Component;
