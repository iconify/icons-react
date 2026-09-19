import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h23i9q6my.css';

const viewBox = {"width":1024,"height":1760};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h23i9q6my"/>`,
		"fallback": "fa:male",
	});
}

export default Component;
