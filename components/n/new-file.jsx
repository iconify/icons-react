import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/h/h49e0tfyw.css';
import '../../css/y/y0gjfnb_z.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="h49e0tfyw"/><path class="y0gjfnb_z"/></g>`,
		"fallback": "streamline-flex:new-file",
	});
}

export default Component;
