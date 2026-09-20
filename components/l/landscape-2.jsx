import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/m/mvwnt9b_o.css';
import '../../css/h/h9m2gfgza.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="mvwnt9b_o"/><path class="h9m2gfgza"/></g>`,
		"fallback": "streamline-flex:landscape-2",
	});
}

export default Component;
