import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/kka-abb2t.css';
import '../../css/j/jdx778b3t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="kka-abb2t"/><path class="jdx778b3t"/></g>`,
		"fallback": "tabler:stack-push",
	});
}

export default Component;
