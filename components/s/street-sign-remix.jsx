import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wmx8dccer.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="wmx8dccer"/>`,
		"fallback": "streamline-flex:street-sign-remix",
	});
}

export default Component;
