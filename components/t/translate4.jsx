import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/g/gauq9o90x.css';
import '../../css/v/v2wnnac1u.css';
import '../../css/n/nvtag-bqc.css';
import '../../css/s/sxos_7ben.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="gauq9o90x"/><path class="v2wnnac1u"/><path class="nvtag-bqc"/><path class="sxos_7ben"/></g>`,
		"fallback": "reicon:translate4",
	});
}

export default Component;
