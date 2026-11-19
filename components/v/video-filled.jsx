import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zefm6hume.css';
import '../../css/y/yhlxuus2v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zefm6hume"/><path class="yhlxuus2v"/></g>`,
		"fallback": "andrsrxn:video-filled",
	});
}

export default Component;
