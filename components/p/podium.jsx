import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/i/inkt8qb9w.css';
import '../../css/a/aj1tj2bdr.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="inkt8qb9w"/><path class="aj1tj2bdr"/></g>`,
		"fallback": "marketeq:podium",
	});
}

export default Component;
