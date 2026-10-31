import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/b/bgwj3fkvr.css';
import '../../css/l/lu_os5b8f.css';
import '../../css/w/wgi9_72zv.css';
import '../../css/w/w49ngccqq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="bgwj3fkvr"/><path class="lu_os5b8f wm-k"/><path class="wgi9_72zv wm-a"/><path class="w49ngccqq wm-deco"/></g>`,
		"fallback": "withicons-kawaii:rss",
	});
}

export default Component;
