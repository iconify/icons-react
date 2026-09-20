import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/e4bgubsxc.css';
import '../../css/b/brrbgz_0f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="e4bgubsxc"/><path class="brrbgz_0f"/></g>`,
		"fallback": "keyline-icons:queue-fill",
	});
}

export default Component;
