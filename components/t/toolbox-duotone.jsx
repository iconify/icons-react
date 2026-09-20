import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/w72bo_4bl.css';
import '../../css/i/igf8p5ula.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="w72bo_4bl"/><path class="igf8p5ula"/></g>`,
		"fallback": "keyline-icons:toolbox-duotone",
	});
}

export default Component;
