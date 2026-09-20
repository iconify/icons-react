import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fv0x2jbvr.css';
import '../../css/x/xsuq0vbuq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fv0x2jbvr"/><path class="xsuq0vbuq"/>`,
		"fallback": "selfhst:lingva-translate-dark",
	});
}

export default Component;
