import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t1snc1dry.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="t1snc1dry"/>`,
		"fallback": "pajamas:multiple-choice",
	});
}

export default Component;
