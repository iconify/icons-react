import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rnr1s3bub.css';

const viewBox = {"width":25,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rnr1s3bub"/>`,
		"fallback": "lineicons:text-paragraph",
	});
}

export default Component;
