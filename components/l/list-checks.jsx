import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/q/qb8r96btl.css';
import '../../css/b/bbwbtabok.css';
import '../../css/z/zea7nlbov.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="qb8r96btl wm-k"/><path class="bbwbtabok wm-a"/><path class="wm-deco zea7nlbov"/></g>`,
		"fallback": "withicons-kawaii:list-checks",
	});
}

export default Component;
