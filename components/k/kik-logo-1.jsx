import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/d/dgte62lkx.css';
import '../../css/j/jb_8bx-nj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="dgte62lkx"/><path clip-rule="evenodd" class="jb_8bx-nj"/></g>`,
		"fallback": "streamline-logos:kik-logo-1",
	});
}

export default Component;
