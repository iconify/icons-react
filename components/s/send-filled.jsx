import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/o/osuc4rb0v.css';
import '../../css/s/s_h1tmbej.css';
import '../../css/p/prd1nacfx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="osuc4rb0v"/><path class="s_h1tmbej"/><path class="prd1nacfx"/></g>`,
		"fallback": "bitcoin-icons:send-filled",
	});
}

export default Component;
