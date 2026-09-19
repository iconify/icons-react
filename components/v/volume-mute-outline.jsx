import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bbi1n57ce.css';
import '../../css/m/mc8nkccec.css';
import '../../css/m/m286a39yt.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bbi1n57ce"/><path class="mc8nkccec"/><path class="m286a39yt"/>`,
		"fallback": "ion:volume-mute-outline",
	});
}

export default Component;
