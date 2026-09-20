import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/czvq_1biq.css';

const viewBox = {"width":1515,"height":1477};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="czvq_1biq"/>`,
		"fallback": "thesvg-color:nordea-dark",
	});
}

export default Component;
