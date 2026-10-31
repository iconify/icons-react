import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/tp-oq1upk.css';
import '../../css/b/bq8rv2bki.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="tp-oq1upk"/><path class="bq8rv2bki"/></g>`,
		"fallback": "coolicons:podium-duocolor-round",
	});
}

export default Component;
