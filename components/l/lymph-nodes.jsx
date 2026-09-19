import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qq-v7yb2v.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qq-v7yb2v"/>`,
		"fallback": "healthicons:lymph-nodes",
	});
}

export default Component;
