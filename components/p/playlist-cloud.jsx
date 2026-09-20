import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/n/nr9218ntv.css';
import '../../css/e/ecyt_bb0q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="nr9218ntv"/><path class="ecyt_bb0q"/></g>`,
		"fallback": "streamline-freehand:playlist-cloud",
	});
}

export default Component;
