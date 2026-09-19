import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jz9zrcc8t.css';
import '../../css/o/o-5hszp9n.css';
import '../../css/k/kpquq8bbz.css';
import '../../css/l/lwgfxfkhv.css';
import '../../css/m/mhuho5bqj.css';
import '../../css/c/c4g53hb5t.css';
import '../../css/o/om4zn8rlt.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jz9zrcc8t"/><path clip-rule="evenodd" class="o-5hszp9n"/><path class="kpquq8bbz"/><path class="lwgfxfkhv"/><path clip-rule="evenodd" class="mhuho5bqj"/><path class="c4g53hb5t"/><path class="om4zn8rlt"/></g>`,
		"fallback": "glyphs:restroom-bold",
	});
}

export default Component;
