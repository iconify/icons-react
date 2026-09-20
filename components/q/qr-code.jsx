import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/g/gwqq3gbdz.css';
import '../../css/u/upat40dkc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="gwqq3gbdz"/><path class="upat40dkc"/></g>`,
		"fallback": "streamline-sharp:qr-code",
	});
}

export default Component;
