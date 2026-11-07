import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qpt8o4b1z.css';
import '../../css/z/zs0elrbfp.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/q/qnl0yuzbt.css';
import '../../css/o/o7jevlg6h.css';
import '../../css/d/di8dn3bsc.css';
import '../../css/p/p21w-1bfy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qpt8o4b1z"/><path class="zs0elrbfp"/><g class="xtpeb-edw"><path class="qnl0yuzbt"/><path class="o7jevlg6h"/><path class="di8dn3bsc"/><path class="p21w-1bfy"/></g>`,
		"fallback": "solar:layout-list-bold-duotone",
	});
}

export default Component;
