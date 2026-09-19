import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/i/ic7am6bqj.css';
import '../../css/y/yls-feb2b.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="ic7am6bqj"/><path class="yls-feb2b"/></g>`,
		"fallback": "healthicons:spreadsheets2x-outline",
	});
}

export default Component;
