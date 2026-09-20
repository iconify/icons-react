import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/j/jukewobug.css';
import '../../css/u/u7n78m30y.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="jukewobug"/><path class="u7n78m30y"/></g>`,
		"fallback": "marketeq:upload-new",
	});
}

export default Component;
