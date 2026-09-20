import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/j/jdber6m_i.css';
import '../../css/a/atsswfz2j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="jdber6m_i"/><path class="atsswfz2j"/></g>`,
		"fallback": "streamline-sharp:visible",
	});
}

export default Component;
