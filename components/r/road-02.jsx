import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/v/vlg2zlbyn.css';
import '../../css/l/l7ctp3bqu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="vlg2zlbyn"/><path class="l7ctp3bqu"/></g>`,
		"fallback": "hugeicons:road-02",
	});
}

export default Component;
