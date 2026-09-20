import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qsu3e4aql.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qsu3e4aql"/>`,
		"fallback": "la:share-alt-solid",
	});
}

export default Component;
