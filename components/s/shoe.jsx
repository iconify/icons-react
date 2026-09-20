import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/n2m9ogbfe.css';
import '../../css/j/jx73qqbvn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="n2m9ogbfe"/><path class="jx73qqbvn"/></g>`,
		"fallback": "tabler:shoe",
	});
}

export default Component;
