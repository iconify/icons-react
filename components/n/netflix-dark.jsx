import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wq2kp497d.css';
import '../../css/k/krjjutbfe.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wq2kp497d"/><path class="krjjutbfe"/>`,
		"fallback": "selfhst:netflix-dark",
	});
}

export default Component;
