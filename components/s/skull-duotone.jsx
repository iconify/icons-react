import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i29j_x8py.css';
import '../../css/z/zf0u2_bci.css';
import '../../css/j/jjbxq_b8w.css';
import '../../css/x/xxbbvx_gg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="i29j_x8py"/><path class="zf0u2_bci"/><path class="jjbxq_b8w"/><path class="xxbbvx_gg"/></g>`,
		"fallback": "lucide-extended:skull-duotone",
	});
}

export default Component;
