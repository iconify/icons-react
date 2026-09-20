import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/md2-6kbtb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="md2-6kbtb"/>`,
		"fallback": "selfhst:netbird-light",
	});
}

export default Component;
