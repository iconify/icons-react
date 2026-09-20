import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/s/snm6yibit.css';
import '../../css/g/ga7t0girt.css';
import '../../css/z/z__w1mbdy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="snm6yibit"/><path class="ga7t0girt"/><path class="z__w1mbdy"/></g>`,
		"fallback": "solar:passport-minimalistic-broken",
	});
}

export default Component;
