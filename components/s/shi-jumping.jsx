import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/p0h6i3b5o.css';
import '../../css/v/v49m2bq4t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="p0h6i3b5o"/><path class="v49m2bq4t"/></g>`,
		"fallback": "tabler:shi-jumping",
	});
}

export default Component;
