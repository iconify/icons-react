import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/v/vemnhttld.css';
import '../../css/j/j2u8cdctm.css';
import '../../css/c/cbfpxhqzr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="vemnhttld"/><path class="j2u8cdctm"/><path class="cbfpxhqzr"/></g>`,
		"fallback": "streamline-sharp-color:type-area",
	});
}

export default Component;
