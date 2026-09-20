import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/s0kuaq79g.css';
import '../../css/b/bkppracoq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="s0kuaq79g"/><path class="bkppracoq"/></g>`,
		"fallback": "tabler:mood-wink",
	});
}

export default Component;
