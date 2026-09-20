import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xlxfdjrvt.css';
import '../../css/e/ebf88wbuc.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xlxfdjrvt"/><path class="ebf88wbuc"/></g>`,
		"fallback": "streamline-color:module-puzzle-1",
	});
}

export default Component;
