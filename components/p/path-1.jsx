import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/p/pcsj7pblv.css';
import '../../css/q/qzne0vrhp.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="pcsj7pblv"/><path class="qzne0vrhp"/></g>`,
		"fallback": "glyphs:path-1",
	});
}

export default Component;
