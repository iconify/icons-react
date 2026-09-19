import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f-ntwsbcy.css';
import '../../css/m/mk2jcnbjj.css';
import '../../css/a/a8924ab8w.css';
import '../../css/q/q4gr0z9uw.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="f-ntwsbcy"/><path class="mk2jcnbjj"/><path class="a8924ab8w"/><path class="q4gr0z9uw"/></g>`,
		"fallback": "glyphs:laugh-duo",
	});
}

export default Component;
