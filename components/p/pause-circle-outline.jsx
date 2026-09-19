import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/q/qpyzh0bes.css';
import '../../css/e/e6qicfbfp.css';
import '../../css/i/ih0ctodhf.css';
import '../../css/k/kz0_pvboy.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="qpyzh0bes"/><path class="e6qicfbfp"/><path class="ih0ctodhf"/><path class="kz0_pvboy"/></g>`,
		"fallback": "glyphs:pause-circle-outline",
	});
}

export default Component;
