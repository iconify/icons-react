import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xvxn1-b6z.css';
import '../../css/p/paw9r2hqk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xvxn1-b6z"/><path class="paw9r2hqk"/></g>`,
		"fallback": "tdesign:pen-quill",
	});
}

export default Component;
