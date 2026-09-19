import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to0c2ub7t.css';
import '../../css/h/hwp1piboi.css';
import '../../css/l/l8k5l9bki.css';
import '../../css/w/wrms15b9r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to0c2ub7t"><path class="hwp1piboi"/><path class="l8k5l9bki"/><path class="wrms15b9r"/></g>`,
		"fallback": "akar-icons:reciept",
	});
}

export default Component;
