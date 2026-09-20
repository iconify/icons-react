import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/muk0_xbke.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="muk0_xbke"/>`,
		"fallback": "selfhst:typesense-dark",
	});
}

export default Component;
