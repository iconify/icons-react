import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/u/ub94q9bbt.css';
import '../../css/l/lblu91blq.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="ub94q9bbt"/><path class="lblu91blq"/></g>`,
		"fallback": "marketeq:measuring-tape",
	});
}

export default Component;
