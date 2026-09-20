import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/zdw-8bbsg.css';
import '../../css/y/yf-ygfhrc.css';
import '../../css/m/mnad05dkl.css';
import '../../css/z/zrvtpnf9n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="zdw-8bbsg"/><path class="yf-ygfhrc"/><path class="mnad05dkl"/><path class="zrvtpnf9n"/></g>`,
		"fallback": "lucide-lab:penguin",
	});
}

export default Component;
