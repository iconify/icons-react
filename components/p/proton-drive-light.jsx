import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/na8uue77l.css';
import '../../css/d/d8n319blu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="na8uue77l"/><path class="d8n319blu"/>`,
		"fallback": "selfhst:proton-drive-light",
	});
}

export default Component;
