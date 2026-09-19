import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/a0trdezov.css';
import '../../css/r/rbpvzg8-g.css';
import '../../css/j/jcog3sb1t.css';
import '../../css/z/z_13fubow.css';
import '../../css/t/tefstla7l.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="a0trdezov"/><path class="rbpvzg8-g"/><path class="jcog3sb1t"/><path class="z_13fubow"/><path class="tefstla7l"/></g>`,
		"fallback": "glyphs:layer-front-bold",
	});
}

export default Component;
