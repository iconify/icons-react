import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tsggtbcdt.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tsggtbcdt"/>`,
		"fallback": "streamline-plump-color:octagram-shape-flat",
	});
}

export default Component;
