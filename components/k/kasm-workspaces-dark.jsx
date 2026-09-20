import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xpxzfh57w.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xpxzfh57w"/>`,
		"fallback": "selfhst:kasm-workspaces-dark",
	});
}

export default Component;
