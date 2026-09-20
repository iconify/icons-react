import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/o/oan0m7b0g.css';
import '../../css/l/lwnlwhb5c.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="oan0m7b0g"/><path class="lwnlwhb5c"/></g>`,
		"fallback": "marketeq:toilet-2",
	});
}

export default Component;
