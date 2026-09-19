import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/p/pa8-l1l1b.css';
import '../../css/x/x0hbydb5g.css';
import '../../css/m/mimbgsbve.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="pa8-l1l1b"/><rect class="x0hbydb5g"/><path class="mimbgsbve"/></g>`,
		"fallback": "bitcoin-icons:shared-wallet-outline",
	});
}

export default Component;
