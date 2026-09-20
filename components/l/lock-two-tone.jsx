import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/x7on4-7jx.css';
import '../../css/p/p0sxmqbsg.css';
import '../../css/k/k8te4qbon.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="x7on4-7jx"/><path class="p0sxmqbsg"/><path class="k8te4qbon"/></g>`,
		"fallback": "keyline-icons:lock-two-tone",
	});
}

export default Component;
