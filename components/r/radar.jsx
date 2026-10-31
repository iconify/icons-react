import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/a/ajpxppb9q.css';
import '../../css/i/i07g9cbiy.css';
import '../../css/r/r3066ccja.css';
import '../../css/a/ag-ibrbsc.css';
import '../../css/q/qmlthkbhy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="ajpxppb9q"/><path class="i07g9cbiy"/><path class="r3066ccja wm-shine"/><path class="ag-ibrbsc wm-k"/><path class="qmlthkbhy wm-a"/></g>`,
		"fallback": "withicons-kawaii:radar",
	});
}

export default Component;
