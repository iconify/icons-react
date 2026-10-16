import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yoc0lwbbq.css';
import '../../css/p/pyolcga6m.css';
import '../../css/f/fpuyb9bst.css';
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
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="yoc0lwbbq"/><path class="pyolcga6m"/><rect transform="matrix(0 -1 -1 0 21.58 20.82)" class="fpuyb9bst"/><circle class="jdbtn82wh"/><path class="qhkj8rbdk"/></g>`,
		"fallback": "andrsrxn:washing-machine",
	});
}

export default Component;
