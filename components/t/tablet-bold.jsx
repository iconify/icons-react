import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uhzur0bgo.css';
import '../../css/u/u3tdfpecc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uhzur0bgo"/><path class="u3tdfpecc"/>`,
		"fallback": "streamline-ultimate:tablet-bold",
	});
}

export default Component;
