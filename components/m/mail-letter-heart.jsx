import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nfygc21au.css';
import '../../css/g/glfxmynsd.css';
import '../../css/j/j5qj9accq.css';
import '../../css/z/z31kbip8e.css';
import '../../css/i/iqrmk5p8o.css';
import '../../css/j/ja2vm6bhg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="nfygc21au"/><path class="glfxmynsd"/><path class="j5qj9accq"/><path class="z31kbip8e"/><path class="iqrmk5p8o"/><path class="ja2vm6bhg"/></g>`,
		"fallback": "andrsrxn:mail-letter-heart",
	});
}

export default Component;
