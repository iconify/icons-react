import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aiq-_lbxp.css';
import '../../css/j/j0xfjhbdx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aiq-_lbxp"/><path class="j0xfjhbdx"/>`,
		"fallback": "tdesign:map-information-2-filled",
	});
}

export default Component;
