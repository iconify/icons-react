import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/i/iorhqikzn.css';
import '../../css/a/afp80hjns.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="iorhqikzn"/><path class="afp80hjns"/></g>`,
		"fallback": "streamline-color:shipping-box-1-flat",
	});
}

export default Component;
