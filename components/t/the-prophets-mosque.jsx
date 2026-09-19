import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/n/n8n_3jlct.css';
import '../../css/p/pll9h1b3u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="n8n_3jlct"/><path class="pll9h1b3u"/></g>`,
		"fallback": "hugeicons:the-prophets-mosque",
	});
}

export default Component;
