import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rck-6gb7h.css';
import '../../css/n/n_p8ajhct.css';
import '../../css/a/aik5s80tc.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rck-6gb7h"/><path class="n_p8ajhct"/><path class="aik5s80tc"/></g>`,
		"fallback": "streamline-color:play-store",
	});
}

export default Component;
