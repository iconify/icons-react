import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipf2zhprn.css';
import '../../css/c/cvimsccvy.css';
import '../../css/i/i5lmhc31t.css';

const viewBox = {"width":40,"height":40};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ipf2zhprn"/><path class="cvimsccvy"/><path class="i5lmhc31t"/>`,
		"fallback": "iwwa:upload",
	});
}

export default Component;
