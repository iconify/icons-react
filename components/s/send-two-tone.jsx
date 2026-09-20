import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/ttj_efbzg.css';
import '../../css/f/f712eg2qp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ttj_efbzg"/><path class="f712eg2qp"/></g>`,
		"fallback": "keyline-icons:send-two-tone",
	});
}

export default Component;
