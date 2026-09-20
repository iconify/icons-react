import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/axej3o6of.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="axej3o6of"/>`,
		"fallback": "selfhst:vikunja-dark",
	});
}

export default Component;
