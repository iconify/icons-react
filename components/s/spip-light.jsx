import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bpcptns8a.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bpcptns8a"/>`,
		"fallback": "selfhst:spip-light",
	});
}

export default Component;
