import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/a/a99dawbxs.css';
import '../../css/o/ou4llgytr.css';
import '../../css/r/rui3uwbpt.css';
import '../../css/x/xq8ohifvd.css';
import '../../css/r/rhraiil6z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="a99dawbxs wm-shadow"/><path class="ou4llgytr wm-shadow"/><path class="rui3uwbpt"/><path class="xq8ohifvd"/><path class="rhraiil6z"/></g>`,
		"fallback": "withicons-brutal:medal",
	});
}

export default Component;
