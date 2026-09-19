import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o93lq-byo.css';
import '../../css/x/x6nhvj-7w.css';
import '../../css/x/xupb65btz.css';
import '../../css/y/y525ptbor.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="o93lq-byo"><path class="x6nhvj-7w"/><path class="xupb65btz"/><circle transform="rotate(90 35 39)" class="y525ptbor"/></g>`,
		"fallback": "icon-park:u-turn-down",
	});
}

export default Component;
