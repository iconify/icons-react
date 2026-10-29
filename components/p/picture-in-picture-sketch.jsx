import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/f/flbl44beh.css';
import '../../css/y/yp_dyqbmy.css';
import '../../css/i/igksilbgd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="flbl44beh"/><path class="wm-k yp_dyqbmy"/><path class="igksilbgd wm-a"/></g>`,
		"fallback": "withicons:picture-in-picture-sketch",
	});
}

export default Component;
