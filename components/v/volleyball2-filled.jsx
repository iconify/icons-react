import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jda6ywbda.css';
import '../../css/c/cc0l7lbki.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="jda6ywbda"/><path class="cc0l7lbki"/></g>`,
		"fallback": "reicon:volleyball2-filled",
	});
}

export default Component;
