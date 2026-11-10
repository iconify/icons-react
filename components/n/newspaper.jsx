import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hn1whcc4k.css';
import '../../css/k/kftf4_-oi.css';
import '../../css/n/n84ctjb9x.css';
import '../../css/j/jz0byia2f.css';
import '../../css/o/on1zx3bbj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="hn1whcc4k"/><path class="kftf4_-oi"/><path class="n84ctjb9x"/><path class="jz0byia2f"/><path class="on1zx3bbj"/></g>`,
		"fallback": "andrsrxn:newspaper",
	});
}

export default Component;
