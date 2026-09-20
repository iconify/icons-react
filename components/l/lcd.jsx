import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/e/eekjbdbdh.css';
import '../../css/s/s6kudd48j.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="eekjbdbdh"/><path class="s6kudd48j"/></g>`,
		"fallback": "marketeq:lcd",
	});
}

export default Component;
