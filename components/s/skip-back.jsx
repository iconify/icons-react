import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/m/mhhdeuh6m.css';
import '../../css/j/ja8n-uile.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="mhhdeuh6m"/><path class="ja8n-uile"/></g>`,
		"fallback": "matita:skip-back",
	});
}

export default Component;
