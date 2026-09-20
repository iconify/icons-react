import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/waeu_qbxo.css';
import '../../css/f/f1yxcrm0m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="waeu_qbxo"/><path class="f1yxcrm0m"/></g>`,
		"fallback": "tabler:treadmill",
	});
}

export default Component;
