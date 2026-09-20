import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/h/honn_5b0a.css';
import '../../css/s/sp8q1obbc.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="honn_5b0a"/><path class="sp8q1obbc"/></g>`,
		"fallback": "marketeq:mute",
	});
}

export default Component;
