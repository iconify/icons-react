import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gshe_di8n.css';
import '../../css/v/vpfegd3_c.css';
import '../../css/r/r0j-00bxo.css';
import '../../css/i/i-nnq1ipm.css';
import '../../css/y/yjf4e5m7r.css';
import '../../css/b/b-lbffbnr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gshe_di8n"/><path class="vpfegd3_c"/><path class="r0j-00bxo"/><path class="i-nnq1ipm"/><path class="yjf4e5m7r"/><path class="b-lbffbnr"/>`,
		"fallback": "fontisto:smiling",
	});
}

export default Component;
