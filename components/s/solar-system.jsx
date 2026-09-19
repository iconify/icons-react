import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/g/gm39xob2t.css';
import '../../css/q/qvxyu9jdu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="gm39xob2t"/><path class="qvxyu9jdu"/></g>`,
		"fallback": "hugeicons:solar-system",
	});
}

export default Component;
