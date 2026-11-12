import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/le3-1wb0z.css';
import '../../css/k/kmpx0bclz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="le3-1wb0z"/><path class="kmpx0bclz"/>`,
		"fallback": "selfhst:piped-dark",
	});
}

export default Component;
