import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/h/h8tvg84al.css';
import '../../css/j/jk0e8f8pu.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="h8tvg84al"/><path class="jk0e8f8pu"/></g>`,
		"fallback": "streamline-flex:justice-scale-1",
	});
}

export default Component;
