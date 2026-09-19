import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/fbfr-hb0c.css';
import '../../css/m/m_t06emlg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="fbfr-hb0c"/><path class="m_t06emlg"/></g>`,
		"fallback": "akar-icons:togo-cup",
	});
}

export default Component;
