import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cg_s6ibdi.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cg_s6ibdi"/>`,
		"fallback": "streamline-flex:paperclip-1",
	});
}

export default Component;
