import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/t/tsx5-nsww.css';
import '../../css/k/kydbn2b6c.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="tsx5-nsww"/><path class="kydbn2b6c"/></g>`,
		"fallback": "marketeq:tv-stand-2",
	});
}

export default Component;
