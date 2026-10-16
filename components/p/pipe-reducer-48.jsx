import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/df4gvuaqr.css';
import '../../css/f/friicz-ai.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="df4gvuaqr"/><path class="friicz-ai"/>`,
		"fallback": "energy-icons:pipe-reducer-48",
	});
}

export default Component;
