import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/yz9kvk_4n.css';
import '../../css/m/mwmu_lynb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="yz9kvk_4n"/><path class="mwmu_lynb"/></g>`,
		"fallback": "tabler:message-2-ai",
	});
}

export default Component;
