import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/anv3f7brl.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="anv3f7brl"/>`,
		"fallback": "selfhst:univention-corporate-server-light",
	});
}

export default Component;
