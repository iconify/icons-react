import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gv7mcpbjq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gv7mcpbjq"/>`,
		"fallback": "selfhst:myip",
	});
}

export default Component;
