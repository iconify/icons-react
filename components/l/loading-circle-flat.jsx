import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pr0wuj7lm.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="pr0wuj7lm"/>`,
		"fallback": "streamline-plump-color:loading-circle-flat",
	});
}

export default Component;
