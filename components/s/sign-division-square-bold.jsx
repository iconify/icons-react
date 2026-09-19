import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/j/j8-9thbob.css';
import '../../css/z/zl-2pzb0a.css';
import '../../css/y/yt9q-fb4i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="j8-9thbob"/><path class="zl-2pzb0a"/><path class="yt9q-fb4i"/></g>`,
		"fallback": "iconamoon:sign-division-square-bold",
	});
}

export default Component;
