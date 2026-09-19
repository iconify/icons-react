import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zm1yg2bqk.css';
import '../../css/f/fo7y28meb.css';
import '../../css/f/f19tz1bim.css';
import '../../css/x/xsimgyn4x.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zm1yg2bqk"/><path class="fo7y28meb"/><path class="f19tz1bim"/><path class="xsimgyn4x"/>`,
		"fallback": "fxemoji:sandals",
	});
}

export default Component;
