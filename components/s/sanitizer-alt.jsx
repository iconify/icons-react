import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nkonw3bdh.css';
import '../../css/s/skxq2dbrt.css';
import '../../css/g/g6shut3wq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nkonw3bdh"/><path class="skxq2dbrt"/><path class="g6shut3wq"/>`,
		"fallback": "uim:sanitizer-alt",
	});
}

export default Component;
