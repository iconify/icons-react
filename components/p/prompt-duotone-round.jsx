import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/da7423ruy.css';
import '../../css/x/xmg1kynso.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="da7423ruy"/><path class="xmg1kynso"/></g>`,
		"fallback": "coolicons:prompt-duotone-round",
	});
}

export default Component;
