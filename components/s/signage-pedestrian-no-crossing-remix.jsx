import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f156abbyl.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="f156abbyl"/>`,
		"fallback": "streamline-flex:signage-pedestrian-no-crossing-remix",
	});
}

export default Component;
