import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/s/sol3rjohs.css';
import '../../css/x/x3y1nc6-y.css';
import '../../css/f/f6d0n0bwn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><circle class="sol3rjohs"/><path class="x3y1nc6-y"/><path class="f6d0n0bwn"/></g>`,
		"fallback": "iconamoon:question-mark-circle",
	});
}

export default Component;
