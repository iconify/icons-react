import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zw5kqcbug.css';
import '../../css/q/q68ypexit.css';
import '../../css/p/p60lpjbfm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zw5kqcbug"/><path class="q68ypexit"/><path class="p60lpjbfm"/></g>`,
		"fallback": "tdesign:mobile",
	});
}

export default Component;
