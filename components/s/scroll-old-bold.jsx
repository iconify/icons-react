import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/ax93e4b8f.css';
import '../../css/h/hwh1d8zit.css';
import '../../css/a/aj56w3bcr.css';
import '../../css/o/ozawm9b2q.css';
import '../../css/f/fey04gbtg.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="ax93e4b8f"/><path class="hwh1d8zit"/><path class="aj56w3bcr"/><path clip-rule="evenodd" class="ozawm9b2q"/><path class="fey04gbtg"/></g>`,
		"fallback": "glyphs:scroll-old-bold",
	});
}

export default Component;
