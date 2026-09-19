import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mcfvnubzm.css';
import '../../css/q/q0wxspbkv.css';
import '../../css/g/gaqtzmgzk.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="mcfvnubzm"/><path class="q0wxspbkv"/><path class="gaqtzmgzk"/></g>`,
		"fallback": "glyphs:lightning-duo",
	});
}

export default Component;
