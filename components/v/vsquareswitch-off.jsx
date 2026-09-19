import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/v/vvdrwqbxp.css';
import '../../css/x/x1okklbox.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="vvdrwqbxp"/><path class="x1okklbox"/></g>`,
		"fallback": "fad:vsquareswitch-off",
	});
}

export default Component;
