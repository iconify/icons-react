import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xkqkf1b6m.css';
import '../../css/y/yg66cgr8n.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xkqkf1b6m"/><path class="yg66cgr8n"/></g>`,
		"fallback": "fluent-emoji-flat:open-file-folder",
	});
}

export default Component;
