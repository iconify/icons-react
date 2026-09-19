import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u9b8kdn2z.css';
import '../../css/v/vpqn_7hdf.css';
import '../../css/l/lc-3a9m0i.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="u9b8kdn2z"/><path class="vpqn_7hdf"/><path class="lc-3a9m0i"/></g>`,
		"fallback": "glyphs:paint-brush-duo",
	});
}

export default Component;
