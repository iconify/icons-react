import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d7ou1kbpy.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="d7ou1kbpy"/>`,
		"fallback": "ix:machine-b",
	});
}

export default Component;
