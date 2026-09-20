import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dcsnbtokg.css';
import '../../css/f/fffxy750p.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="dcsnbtokg"/><path class="fffxy750p"/>`,
		"fallback": "selfhst:loops",
	});
}

export default Component;
