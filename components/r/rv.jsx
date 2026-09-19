import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/n/nscm_ubhz.css';
import '../../css/t/tcbys4b4b.css';
import '../../css/u/u62i7907q.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="nscm_ubhz"/><path class="tcbys4b4b"/><path class="u62i7907q"/></g>`,
		"fallback": "glyphs:rv",
	});
}

export default Component;
