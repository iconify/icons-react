import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/ixfzv-kur.css';
import '../../css/d/damovmc1h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ixfzv-kur"/><path class="damovmc1h"/></g>`,
		"fallback": "coolicons:phone-call-duocolor-round",
	});
}

export default Component;
