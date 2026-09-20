import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/j/j9u2y830z.css';
import '../../css/c/c1iszvz2q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="j9u2y830z"/><path class="c1iszvz2q"/></g>`,
		"fallback": "streamline-sharp-color:tune-adjust-volume",
	});
}

export default Component;
