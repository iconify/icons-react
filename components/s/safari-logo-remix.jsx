import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b35q1ybwl.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="b35q1ybwl"/>`,
		"fallback": "streamline-plump:safari-logo-remix",
	});
}

export default Component;
