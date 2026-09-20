import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q5qjbdcsq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="q5qjbdcsq"/>`,
		"fallback": "streamline-plump:insurance-hand-remix",
	});
}

export default Component;
