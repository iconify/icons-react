import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/t/trkv2chlt.css';
import '../../css/k/ke7d84ibd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="trkv2chlt"/><path class="ke7d84ibd"/></g>`,
		"fallback": "reicon:timer2",
	});
}

export default Component;
