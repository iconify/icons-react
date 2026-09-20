import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3o88hbsh.css';
import '../../css/q/q5chu0b0w.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v3o88hbsh"/><path class="q5chu0b0w"/>`,
		"fallback": "selfhst:tldraw",
	});
}

export default Component;
