import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aw56xxatz.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="aw56xxatz"/>`,
		"fallback": "streamline-flex:stairs-1-remix",
	});
}

export default Component;
