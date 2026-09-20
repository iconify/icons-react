import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cvnt53bmx.css';
import '../../css/a/awtogmg2l.css';
import '../../css/g/gh92heb8b.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="cvnt53bmx"/><path class="awtogmg2l"/><path clip-rule="evenodd" class="gh92heb8b"/></g>`,
		"fallback": "streamline-color:network-flat",
	});
}

export default Component;
