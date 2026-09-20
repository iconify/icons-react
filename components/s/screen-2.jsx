import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xkyxzwb9q.css';
import '../../css/x/xnegumbjx.css';
import '../../css/v/vdy_02tyl.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xkyxzwb9q"><path class="xnegumbjx"/><path class="vdy_02tyl"/></g>`,
		"fallback": "streamline-color:screen-2",
	});
}

export default Component;
