import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/x/xyr68fzah.css';
import '../../css/k/kvrpvkg8y.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="xyr68fzah"/><path class="kvrpvkg8y"/></g>`,
		"fallback": "streamline-color:mouse-wireless-1-flat",
	});
}

export default Component;
