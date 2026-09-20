import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cxj25kbiy.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cxj25kbiy"/>`,
		"fallback": "selfhst:listenarr-dark",
	});
}

export default Component;
