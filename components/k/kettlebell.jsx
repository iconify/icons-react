import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/m/mhkr93b6x.css';
import '../../css/x/xe173sbxe.css';
import '../../css/f/f-875cspz.css';
import '../../css/v/v3g6xoxym.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="mhkr93b6x"/><path class="xe173sbxe"/><path class="f-875cspz"/><circle class="v3g6xoxym"/></g>`,
		"fallback": "hugeicons:kettlebell",
	});
}

export default Component;
