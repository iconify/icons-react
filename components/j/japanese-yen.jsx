import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/l/l1ycygiru.css';
import '../../css/j/jqrzwrb5v.css';
import '../../css/y/y2iwx1nyi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="l1ycygiru wm-shadow"/><path class="jqrzwrb5v wm-shadow"/><path class="y2iwx1nyi"/></g>`,
		"fallback": "withicons-brutal:japanese-yen",
	});
}

export default Component;
