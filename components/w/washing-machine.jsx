import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nuo1aqbjx.css';
import '../../css/m/mzrtbjbnt.css';
import '../../css/j/jdbtn82wh.css';
import '../../css/q/qhkj8rbdk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="nuo1aqbjx"/><path class="mzrtbjbnt"/><circle class="jdbtn82wh"/><path class="qhkj8rbdk"/></g>`,
		"fallback": "andrsrxn:washing-machine",
	});
}

export default Component;
