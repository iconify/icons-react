import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j8b93bckm.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j8b93bckm"/>`,
		"fallback": "la:money-bill-wave-solid",
	});
}

export default Component;
