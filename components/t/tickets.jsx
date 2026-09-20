import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n3ymvob2k.css';
import '../../css/c/cpgpwjcjz.css';
import '../../css/q/qdsd67btr.css';
import '../../css/v/vrvtrabsk.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="n3ymvob2k"/><path class="cpgpwjcjz"/><path class="qdsd67btr"/><path class="vrvtrabsk"/></g>`,
		"fallback": "streamline-color:tickets",
	});
}

export default Component;
