import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3o88hbsh.css';
import '../../css/n/ny54whb0z.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v3o88hbsh"/><path class="ny54whb0z"/>`,
		"fallback": "selfhst:tldraw",
	});
}

export default Component;
