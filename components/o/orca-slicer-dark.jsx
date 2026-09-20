import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/blzm3ki0j.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="blzm3ki0j"/>`,
		"fallback": "selfhst:orca-slicer-dark",
	});
}

export default Component;
