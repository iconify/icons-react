import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/g/g_46jdqfo.css';
import '../../css/n/npp8xqbpa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="g_46jdqfo"/><path class="npp8xqbpa"/></g>`,
		"fallback": "bitcoin-icons:refresh-filled",
	});
}

export default Component;
