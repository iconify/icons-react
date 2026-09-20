import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l-wrktysn.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="l-wrktysn"/>`,
		"fallback": "streamline-color:twitter-flat",
	});
}

export default Component;
