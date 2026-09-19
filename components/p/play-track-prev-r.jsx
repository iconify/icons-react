import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/x/xvlhbdcvj.css';
import '../../css/x/x-vb8mblo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="xvlhbdcvj"/><path class="x-vb8mblo"/></g>`,
		"fallback": "gg:play-track-prev-r",
	});
}

export default Component;
