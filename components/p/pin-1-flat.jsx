import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jne0nvszw.css';
import '../../css/q/qc8x432zd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="jne0nvszw"/><path class="qc8x432zd"/></g>`,
		"fallback": "streamline-sharp-color:pin-1-flat",
	});
}

export default Component;
