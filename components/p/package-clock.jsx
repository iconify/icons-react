import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l86d466bn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l86d466bn"/>`,
		"fallback": "noviair:package-clock",
	});
}

export default Component;
