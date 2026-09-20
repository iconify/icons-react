import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pzmbihsby.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="pzmbihsby"/>`,
		"fallback": "streamline-flex:triangle-flag-remix",
	});
}

export default Component;
