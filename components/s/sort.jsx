import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/r/rjnourh9u.css';
import '../../css/b/bkrja2bvt.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="rjnourh9u"/><path class="bkrja2bvt"/></g>`,
		"fallback": "marketeq:sort",
	});
}

export default Component;
