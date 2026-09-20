import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/c37wdnbmk.css';
import '../../css/g/gd_k_uymo.css';
import '../../css/a/ari5y--3d.css';
import '../../css/j/j2j18nbgy.css';
import '../../css/m/m7gedvb5g.css';
import '../../css/v/vpdbzqbjl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="c37wdnbmk"/><path clip-rule="evenodd" class="gd_k_uymo"/><path class="ari5y--3d"/><path class="j2j18nbgy"/><path class="m7gedvb5g"/><path class="vpdbzqbjl"/></g>`,
		"fallback": "solar:remote-controller-bold-duotone",
	});
}

export default Component;
