import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q1_08bcdh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="q1_08bcdh"/>`,
		"fallback": "streamline-plump:intellectual-remix",
	});
}

export default Component;
