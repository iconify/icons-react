import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/lzd5qmb4t.css';
import '../../css/e/eg76xwbic.css';
import '../../css/j/jno4cqb6l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="lzd5qmb4t"/><path class="eg76xwbic"/><path class="jno4cqb6l"/></g>`,
		"fallback": "tabler:photo-hexagon",
	});
}

export default Component;
