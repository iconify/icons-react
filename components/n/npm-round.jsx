import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pv9tpdbaj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pv9tpdbaj"/>`,
		"fallback": "coolicons:npm-round",
	});
}

export default Component;
