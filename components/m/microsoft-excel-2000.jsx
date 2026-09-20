import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sibkcjb8c.css';
import '../../css/t/ts2m0_f8z.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sibkcjb8c"/><path class="ts2m0_f8z"/>`,
		"fallback": "selfhst:microsoft-excel-2000",
	});
}

export default Component;
