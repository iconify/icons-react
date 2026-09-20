import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/g/gqom-l4kq.css';
import '../../css/k/k_jh-8b-j.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="gqom-l4kq"/><path class="k_jh-8b-j"/></g>`,
		"fallback": "marketeq:lighthouse",
	});
}

export default Component;
