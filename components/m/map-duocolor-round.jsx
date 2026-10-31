import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/cf8r2lbua.css';
import '../../css/w/wvto_bn2j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="cf8r2lbua"/><path class="wvto_bn2j"/></g>`,
		"fallback": "coolicons:map-duocolor-round",
	});
}

export default Component;
