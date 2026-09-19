import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/v/vl_s_18va.css';
import '../../css/p/ph-ksgbhf.css';
import '../../css/z/zfkgdttpz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><rect class="vl_s_18va"/><circle class="ph-ksgbhf"/><path class="zfkgdttpz"/></g>`,
		"fallback": "bitcoin-icons:photo-outline",
	});
}

export default Component;
