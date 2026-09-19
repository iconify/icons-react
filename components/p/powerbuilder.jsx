import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vot768pgq.css';

const viewBox = {"width":497,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vot768pgq"/>`,
		"fallback": "file-icons:powerbuilder",
	});
}

export default Component;
