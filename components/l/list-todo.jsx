import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/x/xxplxq96s.css';
import '../../css/o/o_yio2mgh.css';
import '../../css/w/wkgwq8b-u.css';
import '../../css/n/nzasycbne.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="wm-shadow xxplxq96s"/><path class="o_yio2mgh wm-shadow"/><path class="wkgwq8b-u"/><path class="nzasycbne"/></g>`,
		"fallback": "withicons-brutal:list-todo",
	});
}

export default Component;
