import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lwb64wb6o.css';
import '../../css/t/t489-g_vt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="lwb64wb6o"/><path class="t489-g_vt"/></g>`,
		"fallback": "coolicons:paint-bucket-duotone-round",
	});
}

export default Component;
