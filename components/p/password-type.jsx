import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/f/ftje4ev9v.css';
import '../../css/z/za075jmpe.css';
import '../../css/v/vu--eubcz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="ftje4ev9v"/><path class="za075jmpe"/><path class="vu--eubcz"/></g>`,
		"fallback": "streamline-freehand:password-type",
	});
}

export default Component;
