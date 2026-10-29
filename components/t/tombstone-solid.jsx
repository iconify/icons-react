import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/x/xabpm0buw.css';
import '../../css/v/vhwhc2h1r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="xabpm0buw"/><path class="vhwhc2h1r wm-a"/></g>`,
		"fallback": "withicons:tombstone-solid",
	});
}

export default Component;
