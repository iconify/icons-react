import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/htg2ctj4j.css';

const viewBox = {"width":1792,"height":1792};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="htg2ctj4j"/>`,
		"fallback": "vs:kakao-square",
	});
}

export default Component;
