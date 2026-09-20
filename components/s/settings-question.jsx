import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/p_-r1-b1k.css';
import '../../css/s/s_bzilb7v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="p_-r1-b1k"/><path class="s_bzilb7v"/></g>`,
		"fallback": "tabler:settings-question",
	});
}

export default Component;
