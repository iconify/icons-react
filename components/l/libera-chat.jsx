import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vqo7mbvlt.css';
import '../../css/s/syv4ombst.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vqo7mbvlt"/><path class="syv4ombst"/>`,
		"fallback": "selfhst:libera-chat",
	});
}

export default Component;
