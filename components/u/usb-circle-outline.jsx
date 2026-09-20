import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/i/ip7gl-bja.css';
import '../../css/k/k7m_obn4j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="ip7gl-bja"/><path class="k7m_obn4j"/></g>`,
		"fallback": "solar:usb-circle-outline",
	});
}

export default Component;
