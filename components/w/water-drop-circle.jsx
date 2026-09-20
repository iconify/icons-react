import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/a/aq9_ukftn.css';
import '../../css/f/fz8efub8i.css';
import '../../css/x/xrgx2dblx.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="aq9_ukftn"/><path class="fz8efub8i"/><path class="xrgx2dblx"/></g>`,
		"fallback": "pepicons-pencil:water-drop-circle",
	});
}

export default Component;
