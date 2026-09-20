import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/m_zjykfeh.css';
import '../../css/p/pj05ulbnh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="m_zjykfeh"/><path class="pj05ulbnh"/></g>`,
		"fallback": "lucide:save",
	});
}

export default Component;
