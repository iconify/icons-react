import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/g/gt_tunb1d.css';
import '../../css/k/kpwzw_ndq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="gt_tunb1d"/><path class="kpwzw_ndq"/></g>`,
		"fallback": "streamline-ultimate:microphone-1",
	});
}

export default Component;
