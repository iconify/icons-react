import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jdo9j0m1l.css';
import '../../css/a/avn0fbbja.css';
import '../../css/u/u8oozz6jb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jdo9j0m1l"/><path class="avn0fbbja"/><path class="u8oozz6jb"/></g>`,
		"fallback": "andrsrxn:message-translate",
	});
}

export default Component;
