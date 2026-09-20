import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/ptc16vbmh.css';
import '../../css/p/pvum3qbqc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ptc16vbmh"/><path class="pvum3qbqc"/>`,
		"fallback": "tdesign:surprised-filled",
	});
}

export default Component;
