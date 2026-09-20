import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/u/u3ec4bzgr.css';
import '../../css/x/x85vpacqs.css';
import '../../css/a/afbnp2aqw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="u3ec4bzgr"/><path class="x85vpacqs"/><path class="afbnp2aqw"/></g>`,
		"fallback": "streamline-freehand:responsive-design-monitor-phone",
	});
}

export default Component;
