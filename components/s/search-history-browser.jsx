import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/u/u3qaw2ogo.css';
import '../../css/k/k_0h03e_d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="u3qaw2ogo"/><path class="k_0h03e_d"/></g>`,
		"fallback": "streamline-sharp:search-history-browser",
	});
}

export default Component;
