import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mfvnync4s.css';
import '../../css/z/zxvnpccay.css';
import '../../css/c/chqik1qby.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="mfvnync4s"/><path class="zxvnpccay"/><path class="chqik1qby"/></g>`,
		"fallback": "lucide-extended:shield-house-duotone",
	});
}

export default Component;
