import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/j/j-_nbds1f.css';
import '../../css/h/h7a8jid9n.css';
import '../../css/k/kh6fv0bkc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="j-_nbds1f"/><path class="h7a8jid9n"/><path class="kh6fv0bkc"/></g>`,
		"fallback": "bitcoin-icons:siren-outline",
	});
}

export default Component;
