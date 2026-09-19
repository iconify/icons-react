import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/f/fx_zu3nnm.css';
import '../../css/g/gvie50bbb.css';
import '../../css/x/xifav5b9q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="fx_zu3nnm"/><path class="gvie50bbb"/><path class="xifav5b9q"/></g>`,
		"fallback": "iconamoon:question-mark-square-bold",
	});
}

export default Component;
