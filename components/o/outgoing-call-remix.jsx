import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cdb3783_h.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="cdb3783_h"/>`,
		"fallback": "streamline:outgoing-call-remix",
	});
}

export default Component;
