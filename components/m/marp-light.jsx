import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g22qdwbvx.css';
import '../../css/j/jahsuebty.css';
import '../../css/d/dcbk0ez8n.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g22qdwbvx"/><path class="jahsuebty"/><path class="dcbk0ez8n"/>`,
		"fallback": "selfhst:marp-light",
	});
}

export default Component;
