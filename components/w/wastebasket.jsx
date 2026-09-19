import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gtfcmbcna.css';
import '../../css/r/rfp-f_hib.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gtfcmbcna"/><path class="rfp-f_hib"/>`,
		"fallback": "fxemoji:wastebasket",
	});
}

export default Component;
