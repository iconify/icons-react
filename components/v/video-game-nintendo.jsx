import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/z/zc_ajcpjl.css';
import '../../css/d/d_y40tnvp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="zc_ajcpjl"/><path class="d_y40tnvp"/></g>`,
		"fallback": "streamline-freehand:video-game-nintendo",
	});
}

export default Component;
