import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/bjltz6b5i.css';
import '../../css/n/nic4c59gm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="bjltz6b5i"/><path class="nic4c59gm"/></g>`,
		"fallback": "struq:undo",
	});
}

export default Component;
