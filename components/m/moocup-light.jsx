import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uxg6ho_0l.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uxg6ho_0l"/>`,
		"fallback": "selfhst:moocup-light",
	});
}

export default Component;
