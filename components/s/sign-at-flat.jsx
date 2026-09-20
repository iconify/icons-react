import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uvlbueugh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="uvlbueugh"/>`,
		"fallback": "streamline-plump-color:sign-at-flat",
	});
}

export default Component;
