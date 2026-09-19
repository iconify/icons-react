import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/p/pgw94f2lz.css';
import '../../css/e/e6qicfbfp.css';
import '../../css/b/bggud1brh.css';
import '../../css/k/kz0_pvboy.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="pgw94f2lz"/><path class="e6qicfbfp"/><path class="bggud1brh"/><path class="kz0_pvboy"/></g>`,
		"fallback": "glyphs:stop-circle-outline",
	});
}

export default Component;
