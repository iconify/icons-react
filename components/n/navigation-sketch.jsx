import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/v/vrf_umb-v.css';
import '../../css/j/jpoivdq2g.css';
import '../../css/d/dz-1iivjd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="vrf_umb-v"/><path class="jpoivdq2g"/><path class="dz-1iivjd"/></g>`,
		"fallback": "withicons:navigation-sketch",
	});
}

export default Component;
