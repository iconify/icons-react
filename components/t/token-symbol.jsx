import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pdvjvpb6f.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pdvjvpb6f"/>`,
		"fallback": "oui:token-symbol",
	});
}

export default Component;
