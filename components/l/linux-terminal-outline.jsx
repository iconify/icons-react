import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pr52f_b5y.css';
import '../../css/n/n-g7jh-fr.css';
import '../../css/p/plkky2bfm.css';
import '../../css/w/wnm0p__nu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="pr52f_b5y"><path class="n-g7jh-fr"/><path class="plkky2bfm"/><path class="wnm0p__nu"/></g>`,
		"fallback": "bitcoin-icons:linux-terminal-outline",
	});
}

export default Component;
