import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/t6op9z_rl.css';
import '../../css/z/zewaj38ia.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="t6op9z_rl"/><path class="zewaj38ia"/></g>`,
		"fallback": "coolicons:vault-duocolor-round",
	});
}

export default Component;
