import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t8wglebks.css';
import '../../css/n/nw_hxdnmh.css';
import '../../css/l/llv864bwp.css';
import '../../css/n/n1er_qyhi.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t8wglebks"/><path class="nw_hxdnmh"/><path class="llv864bwp"/><path class="n1er_qyhi"/><path class="qy525jbwx"/>`,
		"fallback": "openmoji:nonbinary",
	});
}

export default Component;
