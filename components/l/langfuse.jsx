import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/g/gm9vu6bgd.css';
import '../../css/r/r4mlh1bwf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="gm9vu6bgd"/><path class="r4mlh1bwf"/></g>`,
		"fallback": "thesvg:langfuse",
	});
}

export default Component;
