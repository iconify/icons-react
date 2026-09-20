import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nr8b3abzh.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="nr8b3abzh"/>`,
		"fallback": "streamline-flex-color:location-target-2-flat",
	});
}

export default Component;
