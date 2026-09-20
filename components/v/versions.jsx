import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/it4ovqb2a.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="it4ovqb2a"/>`,
		"fallback": "system-uicons:versions",
	});
}

export default Component;
