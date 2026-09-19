import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/g/g_yrw5t-e.css';
import '../../css/l/l_mse-bsg.css';
import '../../css/d/dkc_tb-ko.css';
import '../../css/r/r1nix1b9b.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="g_yrw5t-e"/><path class="l_mse-bsg"/><path class="dkc_tb-ko"/><path class="r1nix1b9b"/></g>`,
		"fallback": "glyphs:rocket-outline",
	});
}

export default Component;
