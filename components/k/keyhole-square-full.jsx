import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rqbu23bhp.css';
import '../../css/j/jzxkqkebs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rqbu23bhp"/><path class="jzxkqkebs"/>`,
		"fallback": "uim:keyhole-square-full",
	});
}

export default Component;
