import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/unf39l7fh.css';
import '../../css/c/c2srv2b9k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="unf39l7fh"/><path class="c2srv2b9k"/></g>`,
		"fallback": "andrsrxn:scan",
	});
}

export default Component;
