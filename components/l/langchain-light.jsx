import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tant6eb1x.css';

const viewBox = {"width":120,"height":120};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tant6eb1x"/>`,
		"fallback": "thesvg-color:langchain-light",
	});
}

export default Component;
