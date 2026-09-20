import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/stcn1sxby.css';
import '../../css/e/e38yvhatw.css';
import '../../css/w/w7z2db7iy.css';
import '../../css/h/hpbxf-vje.css';
import '../../css/j/ju1kfvbcq.css';
import '../../css/n/n6ivrbb7t.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="stcn1sxby"/><path class="e38yvhatw"/><path clip-rule="evenodd" class="w7z2db7iy"/><path class="hpbxf-vje"/><path class="ju1kfvbcq"/><path class="n6ivrbb7t"/></g>`,
		"fallback": "streamline-color:printer",
	});
}

export default Component;
