import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/h/hd_fh8brp.css';
import '../../css/a/ai6f5i0aw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="hd_fh8brp"/><path class="ai6f5i0aw"/></g>`,
		"fallback": "hugeicons:virtual-reality-vr-02",
	});
}

export default Component;
