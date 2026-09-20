import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w1268k_zf.css';
import '../../css/y/ypft5mbdm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="w1268k_zf"/><path class="ypft5mbdm"/>`,
		"fallback": "si:phone-locked-fill",
	});
}

export default Component;
