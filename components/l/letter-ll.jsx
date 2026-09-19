import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gg9-v1ver.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gg9-v1ver"/>`,
		"fallback": "carbon:letter-ll",
	});
}

export default Component;
