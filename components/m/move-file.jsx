import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/s/s7o9jrbzn.css';
import '../../css/d/dvwhmxnov.css';
import '../../css/a/a_0cnlboy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="s7o9jrbzn"/><path class="dvwhmxnov"/><path class="a_0cnlboy"/></g>`,
		"fallback": "streamline-sharp:move-file",
	});
}

export default Component;
