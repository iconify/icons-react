import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i8z549mku.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i8z549mku"/>`,
		"fallback": "selfhst:jitsi-meet-dark",
	});
}

export default Component;
