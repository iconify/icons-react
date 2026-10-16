import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wk1hxdbxp.css';
import '../../css/v/vfx4m_b5e.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wk1hxdbxp"/><path class="vfx4m_b5e"/>`,
		"fallback": "energy-icons:phase-shifter-48",
	});
}

export default Component;
