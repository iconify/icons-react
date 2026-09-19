import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t0z8m6xkt.css';
import '../../css/z/zds3n0a5a.css';
import '../../css/u/uamja8bzk.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="t0z8m6xkt"/><path class="zds3n0a5a"/><path class="uamja8bzk"/></g>`,
		"fallback": "glyphs:star-half-2-duo",
	});
}

export default Component;
