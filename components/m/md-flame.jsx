import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xowyx0jna.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xowyx0jna"/>`,
		"fallback": "ion:md-flame",
	});
}

export default Component;
