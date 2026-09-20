import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/k57n1abak.css';
import '../../css/c/c-kvunkxb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="k57n1abak"/><path class="c-kvunkxb"/></g>`,
		"fallback": "tabler:walk",
	});
}

export default Component;
