import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kstg-tb7n.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kstg-tb7n"/>`,
		"fallback": "selfhst:shuthost-dark",
	});
}

export default Component;
