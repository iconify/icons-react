import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kauthwa8a.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kauthwa8a"/>`,
		"fallback": "selfhst:storygraph",
	});
}

export default Component;
