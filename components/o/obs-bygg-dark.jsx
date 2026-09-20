import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/ms9p82buc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ms9p82buc"/>`,
		"fallback": "selfhst:obs-bygg-dark",
	});
}

export default Component;
