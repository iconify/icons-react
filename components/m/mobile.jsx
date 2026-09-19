import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/l/lf7kmzncr.css';
import '../../css/v/v64t8k3yo.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="wwvp95byt"><rect class="lf7kmzncr"/><path class="v64t8k3yo"/></g>`,
		"fallback": "glyphs-poly:mobile",
	});
}

export default Component;
