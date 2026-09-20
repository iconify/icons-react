import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/v/vmrnz3kfn.css';
import '../../css/v/vp5dwb90q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="vmrnz3kfn"/><path class="vp5dwb90q"/></g>`,
		"fallback": "streamline-ultimate:responsive-design",
	});
}

export default Component;
