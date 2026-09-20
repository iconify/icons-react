import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/h/hzny16bib.css';
import '../../css/i/i_dm2v_0f.css';
import '../../css/f/fyxhhkb4t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="hzny16bib"/><path class="i_dm2v_0f"/><path class="fyxhhkb4t"/></g>`,
		"fallback": "streamline-freehand:office-building-outdoors",
	});
}

export default Component;
