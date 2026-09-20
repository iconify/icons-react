import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/c9d511bhy.css';
import '../../css/n/nvjgaobrz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="c9d511bhy"/><circle class="nvjgaobrz"/></g>`,
		"fallback": "lucide:line-dot-bottom-vertical",
	});
}

export default Component;
