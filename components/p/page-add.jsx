import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lots55p-n.css';
import '../../css/p/psm-cjbgb.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lots55p-n"/><path class="psm-cjbgb"/>`,
		"fallback": "foundation:page-add",
	});
}

export default Component;
