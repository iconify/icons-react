import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/notumomre.css';
import '../../css/e/ezkatzbzp.css';
import '../../css/x/xqo6jg7qw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="notumomre"/><path class="ezkatzbzp"/><path class="xqo6jg7qw"/></g>`,
		"fallback": "andrsrxn:plant",
	});
}

export default Component;
