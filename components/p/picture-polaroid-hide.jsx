import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/x/xsxyw_szs.css';
import '../../css/o/ouxwt8bby.css';
import '../../css/p/pyr87bb_l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="xsxyw_szs"/><path class="ouxwt8bby"/><path class="pyr87bb_l"/></g>`,
		"fallback": "streamline-freehand-color:picture-polaroid-hide",
	});
}

export default Component;
