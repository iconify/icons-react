import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kr34jrfns.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="kr34jrfns"/>`,
		"fallback": "streamline-plump:tablet-capsule-remix",
	});
}

export default Component;
