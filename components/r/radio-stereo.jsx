import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/b/b_jhw6a2d.css';
import '../../css/w/wvb73fi4u.css';
import '../../css/j/jqadry37o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="b_jhw6a2d"/><path class="wvb73fi4u"/><path class="jqadry37o"/></g>`,
		"fallback": "streamline-freehand:radio-stereo",
	});
}

export default Component;
