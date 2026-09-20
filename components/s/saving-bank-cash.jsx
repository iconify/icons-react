import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/z/zxck06bnt.css';
import '../../css/l/laxa66b9d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="zxck06bnt"/><path class="laxa66b9d"/></g>`,
		"fallback": "streamline-freehand:saving-bank-cash",
	});
}

export default Component;
