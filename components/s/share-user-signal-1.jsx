import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/d/dmw5v_k2e.css';
import '../../css/v/v1ux_wbex.css';
import '../../css/z/z97m4jb5c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="dmw5v_k2e"/><path class="v1ux_wbex"/><path class="z97m4jb5c"/></g>`,
		"fallback": "streamline-freehand:share-user-signal-1",
	});
}

export default Component;
