import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sl_um2bnc.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="sl_um2bnc"/>`,
		"fallback": "streamline:new-sticky-note-remix",
	});
}

export default Component;
