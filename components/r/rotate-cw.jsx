import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/xehqfdynx.css';
import '../../css/q/qrq72_-8x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="xehqfdynx"/><path class="qrq72_-8x"/></g>`,
		"fallback": "lucide:rotate-cw",
	});
}

export default Component;
