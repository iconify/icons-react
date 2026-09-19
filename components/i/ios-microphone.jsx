import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nm6g_lhrv.css';
import '../../css/d/dgu1br39e.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nm6g_lhrv"/><path class="dgu1br39e"/>`,
		"fallback": "ion:ios-microphone",
	});
}

export default Component;
