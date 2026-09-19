import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/b/bb-fb-brs.css';
import '../../css/x/xcdktibdc.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="bb-fb-brs"/><path class="xcdktibdc"/></g>`,
		"fallback": "glyphs:replay",
	});
}

export default Component;
