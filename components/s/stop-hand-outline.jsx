import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/b/beiar3v7q.css';
import '../../css/m/mqazv_0vr.css';
import '../../css/p/pp2bascsc.css';
import '../../css/b/byrg7evin.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="beiar3v7q"/><path class="mqazv_0vr"/><path class="pp2bascsc"/><path class="byrg7evin"/></g>`,
		"fallback": "glyphs:stop-hand-outline",
	});
}

export default Component;
