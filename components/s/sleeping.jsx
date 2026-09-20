import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/s/skf23zbyd.css';
import '../../css/f/fr0_k2b8a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="skf23zbyd"/><path class="fr0_k2b8a"/></g>`,
		"fallback": "reicon:sleeping",
	});
}

export default Component;
