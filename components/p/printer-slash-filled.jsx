import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nayx7kq2s.css';
import '../../css/j/j77qtabfg.css';
import '../../css/s/s4mvm7bih.css';
import '../../css/u/u7b0qh3uk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="nayx7kq2s"/><path class="j77qtabfg"/><path class="s4mvm7bih"/><path class="u7b0qh3uk"/></g>`,
		"fallback": "reicon:printer-slash-filled",
	});
}

export default Component;
