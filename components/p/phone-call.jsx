import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0a9vkbzg.css';
import '../../css/s/s0-tqnbbs.css';
import '../../css/m/mwgx5ob5e.css';
import '../../css/i/ix53aib4b.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="a0a9vkbzg"><path class="s0-tqnbbs"/><path class="mwgx5ob5e"/><path class="ix53aib4b"/></g>`,
		"fallback": "icon-park:phone-call",
	});
}

export default Component;
