import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p_rdlv40c.css';
import '../../css/s/smyx1hb0z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="p_rdlv40c"/><path class="smyx1hb0z"/></g>`,
		"fallback": "tdesign:map-blocked",
	});
}

export default Component;
