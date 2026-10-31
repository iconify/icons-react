import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/l/l9lv5_bcf.css';
import '../../css/l/le4nw3b-s.css';
import '../../css/e/e4ehvrk0f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="l9lv5_bcf wm-k"/><path class="le4nw3b-s wm-a"/><path class="e4ehvrk0f wm-deco"/></g>`,
		"fallback": "withicons-kawaii:scan-text",
	});
}

export default Component;
