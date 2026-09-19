import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rza_6mg2k.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rza_6mg2k"/>`,
		"fallback": "cil:object-ungroup",
	});
}

export default Component;
