import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hmodlobup.css';
import '../../css/e/emd0dl2-p.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hmodlobup"/><path class="emd0dl2-p"/>`,
		"fallback": "energy-icons:memory-card-48-bold",
	});
}

export default Component;
