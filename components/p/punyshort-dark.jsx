import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddko7lb7s.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ddko7lb7s"/>`,
		"fallback": "selfhst:punyshort-dark",
	});
}

export default Component;
