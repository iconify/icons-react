import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yxtsi0lcq.css';
import '../../css/f/fbuuzob6v.css';
import '../../css/n/nvelfbb4v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="yxtsi0lcq"/><path class="fbuuzob6v"/><rect class="nvelfbb4v"/></g>`,
		"fallback": "andrsrxn:subtitles",
	});
}

export default Component;
