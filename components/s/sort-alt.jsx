import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/da74jmbbb.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="da74jmbbb"/>`,
		"fallback": "system-uicons:sort-alt",
	});
}

export default Component;
