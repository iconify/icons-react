import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xrflbhmmb.css';
import '../../css/h/h3j1xetuj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xrflbhmmb"/><circle class="h3j1xetuj"/>`,
		"fallback": "selfhst:livinity-dark",
	});
}

export default Component;
