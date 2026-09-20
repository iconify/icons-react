import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/a2x15krep.css';
import '../../css/k/ko_nxtb4f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="a2x15krep"/><path class="ko_nxtb4f"/></g>`,
		"fallback": "keyline-icons:shapes-duotone",
	});
}

export default Component;
