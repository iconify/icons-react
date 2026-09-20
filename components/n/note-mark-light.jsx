import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xqg31zb9d.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xqg31zb9d"/>`,
		"fallback": "selfhst:note-mark-light",
	});
}

export default Component;
