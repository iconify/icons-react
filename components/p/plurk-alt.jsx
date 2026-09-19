import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/y/yi_ml2bts.css';
import '../../css/f/frw1ezbng.css';

const viewBox = {"width":1200,"height":1200};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="yi_ml2bts"/><path class="frw1ezbng"/></g>`,
		"fallback": "el:plurk-alt",
	});
}

export default Component;
