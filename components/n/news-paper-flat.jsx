import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pehbxlbcw.css';
import '../../css/h/hmo-f6vsn.css';
import '../../css/u/ux36n6oxf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="pehbxlbcw"/><path clip-rule="evenodd" class="hmo-f6vsn"/><path class="ux36n6oxf"/></g>`,
		"fallback": "streamline-plump-color:news-paper-flat",
	});
}

export default Component;
