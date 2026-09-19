import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u83vykqso.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u83vykqso"/>`,
		"fallback": "academicons:isni-square",
	});
}

export default Component;
