import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/w/wcf_w9b6u.css';
import '../../css/d/d9kdez0ka.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="wcf_w9b6u"/><path class="d9kdez0ka"/></g>`,
		"fallback": "streamline-color:recycle-bin-2-flat",
	});
}

export default Component;
