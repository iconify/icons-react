import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/w/wt_jv_b_k.css';
import '../../css/s/s6c4pcbxm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="wt_jv_b_k"/><path class="s6c4pcbxm"/></g>`,
		"fallback": "streamline-ultimate:video-edit-cut",
	});
}

export default Component;
