import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/apl3tib4x.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="apl3tib4x"/>`,
		"fallback": "pinhead:person-walking-under-icy-eave",
	});
}

export default Component;
