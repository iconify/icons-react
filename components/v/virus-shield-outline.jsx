import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/r/rw3wqqb8q.css';
import '../../css/r/rqbslm17d.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="rw3wqqb8q"/><path class="rqbslm17d"/></g>`,
		"fallback": "healthicons:virus-shield-outline",
	});
}

export default Component;
