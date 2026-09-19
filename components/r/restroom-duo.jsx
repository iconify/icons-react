import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nqn_h22bj.css';
import '../../css/n/nlrpsubxg.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="nqn_h22bj"/><path class="nlrpsubxg"/></g>`,
		"fallback": "glyphs:restroom-duo",
	});
}

export default Component;
