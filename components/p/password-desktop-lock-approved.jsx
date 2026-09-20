import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/x/xl07tt-6b.css';
import '../../css/f/fmam1lxxs.css';
import '../../css/c/ct1flbcol.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="xl07tt-6b"/><path class="fmam1lxxs"/><path class="ct1flbcol"/></g>`,
		"fallback": "streamline-freehand-color:password-desktop-lock-approved",
	});
}

export default Component;
