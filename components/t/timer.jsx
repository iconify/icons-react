import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uq-0iysrl.css';
import '../../css/a/aawwu-mdm.css';
import '../../css/y/y4hrchb5w.css';
import '../../css/f/fyzrulpdg.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="uq-0iysrl"/><path class="aawwu-mdm"/><path class="y4hrchb5w"/><path class="fyzrulpdg"/></g>`,
		"fallback": "glyphs-poly:timer",
	});
}

export default Component;
