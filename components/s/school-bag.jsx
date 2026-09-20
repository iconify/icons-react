import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/q/qpwwalb9j.css';
import '../../css/x/xtmgp1b9o.css';
import '../../css/x/xckmele1w.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="qpwwalb9j"/><path class="xtmgp1b9o"/><path class="xckmele1w"/></g>`,
		"fallback": "marketeq:school-bag",
	});
}

export default Component;
