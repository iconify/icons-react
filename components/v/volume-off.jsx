import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/d/dc8ea8trm.css';
import '../../css/h/hk62-obry.css';
import '../../css/h/hhwgsyjct.css';
import '../../css/j/ja3fu9-gv.css';
import '../../css/w/wa9b2vb-y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="dc8ea8trm wm-shadow"/><path class="hk62-obry wm-shadow"/><path class="hhwgsyjct"/><path class="ja3fu9-gv"/><path class="wa9b2vb-y wm-s"/></g>`,
		"fallback": "withicons-brutal:volume-off",
	});
}

export default Component;
