import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/s/s19aowben.css';
import '../../css/g/gq055--ga.css';
import '../../css/m/mvkasiemb.css';
import '../../css/l/l4vllvb7o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="s19aowben"/><path class="gq055--ga"/><path class="mvkasiemb"/><path class="l4vllvb7o"/></g>`,
		"fallback": "solar:list-check-minimalistic-line-duotone",
	});
}

export default Component;
