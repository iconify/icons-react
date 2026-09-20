import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zrk_i1wgr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zrk_i1wgr"/>`,
		"fallback": "reicon:redo-circle-square-filled",
	});
}

export default Component;
