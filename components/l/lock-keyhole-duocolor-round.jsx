import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/ay0o1u2ti.css';
import '../../css/k/ko0wz_brv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ay0o1u2ti"/><path class="ko0wz_brv"/></g>`,
		"fallback": "coolicons:lock-keyhole-duocolor-round",
	});
}

export default Component;
