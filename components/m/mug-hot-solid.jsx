import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bskjuj5fc.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bskjuj5fc"/>`,
		"fallback": "la:mug-hot-solid",
	});
}

export default Component;
