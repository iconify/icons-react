import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/m/ms8rsmb7j.css';
import '../../css/j/jwa8e9rov.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="ms8rsmb7j"/><path class="jwa8e9rov"/></g>`,
		"fallback": "si-glyph:typewriter",
	});
}

export default Component;
