import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/e/eb_yiab9w.css';
import '../../css/q/q1j96xbdb.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="eb_yiab9w"/><path class="q1j96xbdb"/></g>`,
		"fallback": "marketeq:touchid",
	});
}

export default Component;
