import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/j/jjw62pbsu.css';
import '../../css/p/pn-wogbiq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="user-outline"><g class="Vector n1lsf0bnc" clip-rule="evenodd"><path class="jjw62pbsu"/><path class="pn-wogbiq"/></g></g>`,
		"fallback": "cuida:user-outline",
	});
}

export default Component;
