import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/ax444vb0s.css';
import '../../css/k/kitj22beb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ax444vb0s"/><path class="kitj22beb"/></g>`,
		"fallback": "tabler:shopping-bag-code",
	});
}

export default Component;
