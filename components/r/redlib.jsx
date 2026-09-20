import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pqu2_e4mu.css';
import '../../css/i/i-02_nl2g.css';
import '../../css/e/eyc-0ib3w.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="pqu2_e4mu"/><path class="i-02_nl2g"/><path class="eyc-0ib3w"/>`,
		"fallback": "selfhst:redlib",
	});
}

export default Component;
