import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/q/qehczibes.css';
import '../../css/i/ir7t9sx6t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="qehczibes"/><path class="ir7t9sx6t"/></g>`,
		"fallback": "streamline-sharp:upload-square",
	});
}

export default Component;
