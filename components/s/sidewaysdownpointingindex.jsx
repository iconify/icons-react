import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zwany8eak.css';
import '../../css/l/laefk-_jt.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zwany8eak"/><path class="laefk-_jt"/>`,
		"fallback": "fxemoji:sidewaysdownpointingindex",
	});
}

export default Component;
