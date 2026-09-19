import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/g/gyuogtbyx.css';
import '../../css/t/twu1eqbwq.css';
import '../../css/s/sgoo-oy7b.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="gyuogtbyx"/><circle class="twu1eqbwq"/><path class="sgoo-oy7b"/></g>`,
		"fallback": "icon-park-solid:open-an-account",
	});
}

export default Component;
