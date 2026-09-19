import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uzw2gxtkm.css';
import '../../css/f/f6sqxlbwl.css';
import '../../css/j/j2p94mlao.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uzw2gxtkm"/><path class="f6sqxlbwl"/><path class="j2p94mlao"/>`,
		"fallback": "boxicons:layers-down-right",
	});
}

export default Component;
