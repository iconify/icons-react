import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wpn46ob-x.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="wpn46ob-x"/>`,
		"fallback": "ix:plant-handbook",
	});
}

export default Component;
