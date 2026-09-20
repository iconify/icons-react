import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/e/erodw14qe.css';
import '../../css/f/fdppbsbnc.css';
import '../../css/m/mbttp5b2d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="erodw14qe"/><path class="fdppbsbnc"/><path class="mbttp5b2d"/></g>`,
		"fallback": "streamline-freehand:share-radar",
	});
}

export default Component;
