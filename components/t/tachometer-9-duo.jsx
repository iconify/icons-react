import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rymil3blb.css';
import '../../css/x/x739a3bax.css';
import '../../css/e/eewbnjvit.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rymil3blb"/><path class="x739a3bax"/><path class="eewbnjvit"/></g>`,
		"fallback": "glyphs:tachometer-9-duo",
	});
}

export default Component;
