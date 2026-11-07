import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/xh9ewqbqo.css';
import '../../css/b/bl0fh35fi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="xh9ewqbqo"/><path class="bl0fh35fi"/></g>`,
		"fallback": "solar:square-forward-broken",
	});
}

export default Component;
