import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/jax7lgz7p.css';
import '../../css/p/pk-6-_t4n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="jax7lgz7p"/><path class="pk-6-_t4n"/></g>`,
		"fallback": "tabler:settings-code",
	});
}

export default Component;
