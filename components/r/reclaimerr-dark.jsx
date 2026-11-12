import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i5s8215rm.css';
import '../../css/m/mkgj1odis.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i5s8215rm"/><path class="mkgj1odis"/>`,
		"fallback": "selfhst:reclaimerr-dark",
	});
}

export default Component;
