import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bhu7n8bvi.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bhu7n8bvi"/>`,
		"fallback": "fa7-solid:trash-restore",
	});
}

export default Component;
