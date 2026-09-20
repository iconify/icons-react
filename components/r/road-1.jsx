import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nl6h39t1z.css';
import '../../css/b/b9iubibxn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nl6h39t1z"/><path clip-rule="evenodd" class="b9iubibxn"/>`,
		"fallback": "lineicons:road-1",
	});
}

export default Component;
