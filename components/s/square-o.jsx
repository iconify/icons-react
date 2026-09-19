import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gt0e9ox5f.css';

const viewBox = {"width":1408,"height":1408};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gt0e9ox5f"/>`,
		"fallback": "fa:square-o",
	});
}

export default Component;
