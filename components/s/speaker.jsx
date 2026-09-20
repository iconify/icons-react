import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/e/e91jz5-tm.css';
import '../../css/s/sx0ycobsk.css';
import '../../css/c/cd2zdpbnx.css';
import '../../css/b/bzudmbcps.css';
import '../../css/i/if4zqtb9v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="e91jz5-tm"/><path class="sx0ycobsk"/><path class="cd2zdpbnx"/><path class="bzudmbcps"/><path class="if4zqtb9v"/></g>`,
		"fallback": "streamline-freehand-color:speaker",
	});
}

export default Component;
