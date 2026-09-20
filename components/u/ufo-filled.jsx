import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/os-9hpb5s.css';
import '../../css/i/i13zjhb2a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="os-9hpb5s"/><path class="i13zjhb2a"/></g>`,
		"fallback": "reicon:ufo-filled",
	});
}

export default Component;
