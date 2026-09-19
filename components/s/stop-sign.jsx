import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kg_f1--9j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kg_f1--9j"/>`,
		"fallback": "ci:stop-sign",
	});
}

export default Component;
