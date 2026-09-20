import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8famm2mn.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="n8famm2mn"/>`,
		"fallback": "qlementine-icons:key-opt-16",
	});
}

export default Component;
