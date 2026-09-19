import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x0t-ulkpt.css';
import '../../css/q/qsd78cb5q.css';
import '../../css/n/nivgmebkz.css';
import '../../css/f/ffrw3mbrn.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="x0t-ulkpt"/><path clip-rule="evenodd" class="qsd78cb5q"/><path class="nivgmebkz"/><path clip-rule="evenodd" class="ffrw3mbrn"/></g>`,
		"fallback": "glyphs:pharmacy-1-outline",
	});
}

export default Component;
