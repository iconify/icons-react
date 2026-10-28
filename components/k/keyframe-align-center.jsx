import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/ajc7gjjcc.css';
import '../../css/v/vnu171bte.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ajc7gjjcc"/><path class="vnu171bte"/></g>`,
		"fallback": "andrsrxn:keyframe-align-center",
	});
}

export default Component;
