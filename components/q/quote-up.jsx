import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/l/le2lglbub.css';
import '../../css/m/m_w6stipp.css';
import '../../css/i/iqkz9v-ci.css';
import '../../css/m/m70ohgbed.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="le2lglbub"/><path class="m_w6stipp"/><path class="iqkz9v-ci"/><path class="m70ohgbed"/></g>`,
		"fallback": "hugeicons:quote-up",
	});
}

export default Component;
