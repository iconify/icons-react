import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/g/gjdc2nvab.css';
import '../../css/w/wb4hhokrb.css';
import '../../css/e/esa11jb9o.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="gjdc2nvab"/><path class="wb4hhokrb"/><path class="esa11jb9o"/></g>`,
		"fallback": "glyphs:route",
	});
}

export default Component;
