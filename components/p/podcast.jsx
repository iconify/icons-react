import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/d/dbokbbcvl.css';
import '../../css/g/gbfxcnl8s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="dbokbbcvl"/><path class="gbfxcnl8s"/></g>`,
		"fallback": "hugeicons:podcast",
	});
}

export default Component;
