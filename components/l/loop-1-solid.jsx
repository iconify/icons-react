import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ui71xabtb.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ui71xabtb"/>`,
		"fallback": "streamline:loop-1-solid",
	});
}

export default Component;
