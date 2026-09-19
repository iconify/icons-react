import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/z/z2aue9bmq.css';
import '../../css/s/szqd1bcxc.css';
import '../../css/l/lxivd679c.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="z2aue9bmq"/><path class="szqd1bcxc"/><path class="lxivd679c"/></g>`,
		"fallback": "glyphs:lips",
	});
}

export default Component;
