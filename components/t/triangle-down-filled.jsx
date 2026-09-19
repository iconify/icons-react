import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cedp-nw9f.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cedp-nw9f"/>`,
		"fallback": "pepicons:triangle-down-filled",
	});
}

export default Component;
