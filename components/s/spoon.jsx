import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o0b-z2s3x.css';

const viewBox = {"width":640,"height":1792};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o0b-z2s3x"/>`,
		"fallback": "fa:spoon",
	});
}

export default Component;
