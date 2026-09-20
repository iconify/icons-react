import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/bx4zq5e5y.css';
import '../../css/p/px8tuobck.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="bx4zq5e5y"/><path class="px8tuobck"/></g>`,
		"fallback": "tabler:rewind-backward-30",
	});
}

export default Component;
