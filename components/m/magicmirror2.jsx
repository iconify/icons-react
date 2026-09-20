import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o1ydcvb-h.css';
import '../../css/n/n3w0hhuyz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o1ydcvb-h"/><path class="n3w0hhuyz"/>`,
		"fallback": "selfhst:magicmirror2",
	});
}

export default Component;
