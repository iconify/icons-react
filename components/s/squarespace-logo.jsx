import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lmo9ppb1i.css';
import '../../css/p/pf38omm_v.css';
import '../../css/n/nr76ggb-a.css';
import '../../css/j/jw5sb_bep.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="lmo9ppb1i"><path class="pf38omm_v"/><path class="nr76ggb-a"/><path class="jw5sb_bep"/></g>`,
		"fallback": "streamline-ultimate-color:squarespace-logo",
	});
}

export default Component;
