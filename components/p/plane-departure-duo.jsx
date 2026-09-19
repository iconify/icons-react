import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/poaufnp4w.css';
import '../../css/o/ov-eidckw.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="poaufnp4w"/><path class="ov-eidckw"/></g>`,
		"fallback": "glyphs:plane-departure-duo",
	});
}

export default Component;
