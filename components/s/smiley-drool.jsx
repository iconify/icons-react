import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/deb4wmkmp.css';
import '../../css/z/zoxgybcvs.css';
import '../../css/u/u6bmzrbba.css';
import '../../css/i/ir4q9tzxv.css';
import '../../css/m/m8cdysjau.css';
import '../../css/y/yr4w3tb4q.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="deb4wmkmp"/><path class="zoxgybcvs"/><path class="u6bmzrbba"/><path class="ir4q9tzxv"/><path class="m8cdysjau"/><path class="yr4w3tb4q"/></g>`,
		"fallback": "streamline-color:smiley-drool",
	});
}

export default Component;
