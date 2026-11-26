import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/m_wvr_kvl.css';
import '../../css/i/iyrx4jkbw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="m_wvr_kvl"/><rect class="iyrx4jkbw"/></g>`,
		"fallback": "lucide:smartphone-charging",
	});
}

export default Component;
