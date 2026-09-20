import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/zvfsrmv1m.css';
import '../../css/a/a1iby1bis.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="zvfsrmv1m"/><path class="a1iby1bis"/></g>`,
		"fallback": "tabler:rewind-forward-5",
	});
}

export default Component;
