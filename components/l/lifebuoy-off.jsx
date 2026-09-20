import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/kt6l5389a.css';
import '../../css/p/pgsjzwb1n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="kt6l5389a"/><path class="pgsjzwb1n"/></g>`,
		"fallback": "tabler:lifebuoy-off",
	});
}

export default Component;
