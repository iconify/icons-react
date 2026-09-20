import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h426v_b5r.css';
import '../../css/t/tcv195mym.css';
import '../../css/b/bolf66nom.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="h426v_b5r"/><path class="tcv195mym"/><path class="bolf66nom"/></g>`,
		"fallback": "majesticons:playlist",
	});
}

export default Component;
