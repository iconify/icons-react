import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/j/jlloykbbt.css';
import '../../css/o/o4b0zy0lc.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="jlloykbbt"/><path class="o4b0zy0lc"/></g>`,
		"fallback": "streamline-flex:photo-camera",
	});
}

export default Component;
