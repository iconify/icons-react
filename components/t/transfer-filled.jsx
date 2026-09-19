import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/u/uhzia1c2l.css';
import '../../css/j/j22be9bvi.css';
import '../../css/w/w308kqbvw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="uhzia1c2l"/><path class="j22be9bvi"/><path class="w308kqbvw"/></g>`,
		"fallback": "bitcoin-icons:transfer-filled",
	});
}

export default Component;
