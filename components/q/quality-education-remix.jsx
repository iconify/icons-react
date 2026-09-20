import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ycbxpo2hv.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ycbxpo2hv"/>`,
		"fallback": "streamline:quality-education-remix",
	});
}

export default Component;
