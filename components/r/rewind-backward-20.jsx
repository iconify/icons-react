import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/c5x9gzbhq.css';
import '../../css/i/isjgl5b-w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="c5x9gzbhq"/><path class="isjgl5b-w"/></g>`,
		"fallback": "tabler:rewind-backward-20",
	});
}

export default Component;
