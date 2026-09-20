import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/b/b80j_5bpt.css';
import '../../css/c/cj5fkob-k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="b80j_5bpt"/><path class="cj5fkob-k"/></g>`,
		"fallback": "stash:qr-code",
	});
}

export default Component;
