import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/etftr2brq.css';
import '../../css/i/i4pcs4-lg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="etftr2brq"/><circle class="i4pcs4-lg"/>`,
		"fallback": "fxemoji:lowerrightwhitecircle",
	});
}

export default Component;
