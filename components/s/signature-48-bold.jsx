import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lugoebbye.css';
import '../../css/e/e55annuph.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lugoebbye"/><path class="e55annuph"/>`,
		"fallback": "energy-icons:signature-48-bold",
	});
}

export default Component;
