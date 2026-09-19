import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/u/udjdnbp1i.css';
import '../../css/a/a069u2bcq.css';
import '../../css/n/neaq6ub3t.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="udjdnbp1i"/><path class="a069u2bcq"/><path class="neaq6ub3t"/></g>`,
		"fallback": "glyphs:tv-retro-duo",
	});
}

export default Component;
