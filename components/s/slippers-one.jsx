import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/q/qyxvp4bzh.css';
import '../../css/q/ql-_b-qdo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="qyxvp4bzh"/><path class="ql-_b-qdo"/></g>`,
		"fallback": "icon-park:slippers-one",
	});
}

export default Component;
