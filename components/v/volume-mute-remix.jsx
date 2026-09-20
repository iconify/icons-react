import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l1m46ir4x.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="l1m46ir4x"/>`,
		"fallback": "streamline-flex:volume-mute-remix",
	});
}

export default Component;
