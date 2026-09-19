import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/n/n3e2bl-1s.css';
import '../../css/k/kozsdpb7i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="logout-outline"><g class="Vector n1lsf0bnc" clip-rule="evenodd"><path class="n3e2bl-1s"/><path class="kozsdpb7i"/></g></g>`,
		"fallback": "cuida:logout-outline",
	});
}

export default Component;
