import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8s2800fo.css';
import '../../css/m/ma-2opx8e.css';
import '../../css/u/uruqrcc2v.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n8s2800fo"/><path class="ma-2opx8e"/><path class="uruqrcc2v"/>`,
		"fallback": "selfhst:netflix",
	});
}

export default Component;
