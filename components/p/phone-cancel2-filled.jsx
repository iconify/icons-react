import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zezrkwcap.css';
import '../../css/o/ov86d5b7u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="zezrkwcap"/><path class="ov86d5b7u"/></g>`,
		"fallback": "reicon:phone-cancel2-filled",
	});
}

export default Component;
