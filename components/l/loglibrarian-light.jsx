import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkb3zf1ul.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dkb3zf1ul"/>`,
		"fallback": "selfhst:loglibrarian-light",
	});
}

export default Component;
