import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/w/wdrhx935x.css';
import '../../css/a/a9j22xbxp.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="wdrhx935x"/><path class="a9j22xbxp"/></g>`,
		"fallback": "glyphs:pencil-1",
	});
}

export default Component;
