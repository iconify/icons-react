import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/i/i1gg6ztbn.css';
import '../../css/r/rawg3m7dk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="i1gg6ztbn"/><path class="rawg3m7dk"/></g>`,
		"fallback": "streamline-sharp-color:nose-smell",
	});
}

export default Component;
