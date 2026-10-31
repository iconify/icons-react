import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/ay0o1u2ti.css';
import '../../css/k/kl2nym86g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ay0o1u2ti"/><path class="kl2nym86g"/></g>`,
		"fallback": "coolicons:lock-duocolor-round",
	});
}

export default Component;
