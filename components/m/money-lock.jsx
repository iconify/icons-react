import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kk51r8bsr.css';
import '../../css/r/r3su53b9v.css';
import '../../css/m/mur8xvbmw.css';
import '../../css/z/zaj4axb5y.css';
import '../../css/a/a-5kiefaq.css';
import '../../css/m/mlczmkbpu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="kk51r8bsr"/><path class="r3su53b9v"/><circle class="mur8xvbmw"/><path class="zaj4axb5y"/><rect class="a-5kiefaq"/><path class="mlczmkbpu"/></g>`,
		"fallback": "andrsrxn:money-lock",
	});
}

export default Component;
