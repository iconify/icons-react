import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d1ttg5dmj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="d1ttg5dmj"/>`,
		"fallback": "streamline-plump:wallet-remix",
	});
}

export default Component;
