import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/b/b-da_8bha.css';
import '../../css/y/y-n5lgb3n.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="b-da_8bha"/><path class="y-n5lgb3n"/></g>`,
		"fallback": "marketeq:push-pin",
	});
}

export default Component;
