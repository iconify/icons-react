import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/k/kk0lp9bsa.css';
import '../../css/n/nxievab5i.css';
import '../../css/f/fnubyoobq.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="kk0lp9bsa"/><path class="nxievab5i"/><path class="fnubyoobq"/></g>`,
		"fallback": "marketeq:rotate-lock",
	});
}

export default Component;
