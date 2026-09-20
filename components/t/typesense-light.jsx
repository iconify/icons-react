import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xfv2j2qkp.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xfv2j2qkp"/>`,
		"fallback": "selfhst:typesense-light",
	});
}

export default Component;
