import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/df6bc1b2y.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="df6bc1b2y"/>`,
		"fallback": "codicon:verified-filled",
	});
}

export default Component;
