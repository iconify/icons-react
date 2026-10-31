import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/lmxlbqbeq.css';
import '../../css/a/a7zq4dnlm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="lmxlbqbeq"/><path class="a7zq4dnlm"/></g>`,
		"fallback": "coolicons:shield-off-duocolor-round",
	});
}

export default Component;
