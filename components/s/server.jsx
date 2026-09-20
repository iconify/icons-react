import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/v/vyglt7bor.css';
import '../../css/u/u056v814h.css';
import '../../css/n/nuy3tow1s.css';
import '../../css/q/qz30_3b3h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="vyglt7bor"/><path class="u056v814h"/><path class="nuy3tow1s"/><path class="qz30_3b3h"/></g>`,
		"fallback": "streamline-cyber:server",
	});
}

export default Component;
