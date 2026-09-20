import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n9m_vhdwt.css';
import '../../css/b/beosq2b5r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="n9m_vhdwt"/><path class="beosq2b5r"/></g>`,
		"fallback": "si:moon-duotone",
	});
}

export default Component;
