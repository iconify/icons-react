import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tz7dlcc-l.css';
import '../../css/d/dhqx3vboc.css';
import '../../css/b/b87hwbboa.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tz7dlcc-l"><path class="dhqx3vboc"/><path class="b87hwbboa"/></g>`,
		"fallback": "catppuccin:javascript",
	});
}

export default Component;
