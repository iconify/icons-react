import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/g/gokw35m3p.css';
import '../../css/s/s_qhe0bwz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="gokw35m3p"/><path class="s_qhe0bwz"/></g>`,
		"fallback": "hugeicons:screen-add-to-home-02",
	});
}

export default Component;
