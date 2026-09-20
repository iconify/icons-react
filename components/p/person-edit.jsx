import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sb-u-q-7f.css';
import '../../css/d/dvl-5rbdu.css';
import '../../css/s/sku7lgf0f.css';
import '../../css/m/m_typy8mu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="sb-u-q-7f"/><path class="dvl-5rbdu"/><path class="sku7lgf0f"/><path class="m_typy8mu"/></g>`,
		"fallback": "streamline-cyber-color:person-edit",
	});
}

export default Component;
