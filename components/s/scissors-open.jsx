import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/i/iporvewwo.css';
import '../../css/v/vf5jtqb5z.css';
import '../../css/e/ecam5r2nq.css';
import '../../css/z/zybhtbb_p.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="iporvewwo"/><path class="vf5jtqb5z"/><path class="ecam5r2nq"/><path clip-rule="evenodd" class="zybhtbb_p"/></g>`,
		"fallback": "glyphs:scissors-open",
	});
}

export default Component;
