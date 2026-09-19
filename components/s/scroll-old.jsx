import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/y/y15plgx5a.css';
import '../../css/r/rzy-07etm.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="y15plgx5a"/><path class="rzy-07etm"/></g>`,
		"fallback": "glyphs:scroll-old",
	});
}

export default Component;
