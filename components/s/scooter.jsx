import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/d/dazad0doo.css';
import '../../css/i/i089oobsy.css';
import '../../css/h/h3vcxc03u.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="dazad0doo"/><path class="i089oobsy"/><path class="h3vcxc03u"/></g>`,
		"fallback": "glyphs:scooter",
	});
}

export default Component;
