import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/w/w_wh5vbew.css';
import '../../css/x/xfvnrcc7s.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="w_wh5vbew"/><path class="xfvnrcc7s"/></g>`,
		"fallback": "streamline-flex-color:safe-vault-flat",
	});
}

export default Component;
