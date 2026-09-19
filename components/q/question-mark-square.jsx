import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/b/b8twcu9qm.css';
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
		"content": `<g class="to-5kdesz"><path class="b8twcu9qm"/><path class="x3y1nc6-y"/><path class="f6d0n0bwn"/></g>`,
		"fallback": "iconamoon:question-mark-square",
	});
}

export default Component;
