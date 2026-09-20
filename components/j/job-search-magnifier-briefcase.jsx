import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/x/x_vzdkbnw.css';
import '../../css/f/fyrhi1buf.css';
import '../../css/h/h9uoembmc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="x_vzdkbnw"/><path class="fyrhi1buf"/><path class="h9uoembmc"/></g>`,
		"fallback": "streamline-freehand:job-search-magnifier-briefcase",
	});
}

export default Component;
