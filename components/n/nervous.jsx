import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gshe_di8n.css';
import '../../css/v/vpfegd3_c.css';
import '../../css/a/akde-jumm.css';
import '../../css/u/un96hmbbz.css';
import '../../css/l/lzd_sub0p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gshe_di8n"/><path class="vpfegd3_c"/><path class="akde-jumm"/><path class="un96hmbbz"/><path class="lzd_sub0p"/>`,
		"fallback": "fontisto:nervous",
	});
}

export default Component;
