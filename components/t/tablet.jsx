import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pf9opgz_x.css';
import '../../css/p/pcmgirs8u.css';
import '../../css/z/zeii62bjk.css';
import '../../css/j/jmcvrubdx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pf9opgz_x wm-k"/><path class="pcmgirs8u wm-k"/><path class="wm-k zeii62bjk"/><path class="jmcvrubdx wm-a"/>`,
		"fallback": "withicons-bauhaus:tablet",
	});
}

export default Component;
