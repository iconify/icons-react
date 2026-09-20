import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/e/e4nz8hbbh.css';
import '../../css/v/vpbpywzov.css';
import '../../css/w/wzw9_ibbf.css';
import '../../css/v/vesenmbfb.css';
import '../../css/a/a7_0t4bbe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="e4nz8hbbh"/><path class="vpbpywzov"/><path class="wzw9_ibbf"/><path class="vesenmbfb"/><path class="a7_0t4bbe"/></g>`,
		"fallback": "streamline-freehand-color:modern-music-drums",
	});
}

export default Component;
