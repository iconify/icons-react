import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/f/fa2jkip9z.css';
import '../../css/b/b12-u1b4n.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="fa2jkip9z"/><path class="b12-u1b4n"/></g>`,
		"fallback": "marketeq:triangle-ruler-pencil",
	});
}

export default Component;
