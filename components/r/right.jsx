import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/svujsub8f.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="svujsub8f"/>`,
		"fallback": "uiw:right",
	});
}

export default Component;
