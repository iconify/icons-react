import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bgg1uibch.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bgg1uibch"/>`,
		"fallback": "fluent-mdl2:review-request-solid",
	});
}

export default Component;
