import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gzutq080q.css';

const viewBox = {"width":1664,"height":1408};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gzutq080q"/>`,
		"fallback": "fa:th-large",
	});
}

export default Component;
