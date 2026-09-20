import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d0wzb5byf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d0wzb5byf"/>`,
		"fallback": "streamline-plump:select-all",
	});
}

export default Component;
