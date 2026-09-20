import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/p/plu3th5vn.css';
import '../../css/c/cgski3btf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="plu3th5vn"/><path class="cgski3btf"/></g>`,
		"fallback": "reicon:magic-wand-filled",
	});
}

export default Component;
