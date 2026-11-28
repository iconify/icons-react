import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lsa0n1bqg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lsa0n1bqg"/>`,
		"fallback": "noviair:map-star",
	});
}

export default Component;
