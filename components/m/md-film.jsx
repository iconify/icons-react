import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gix87escz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gix87escz"/>`,
		"fallback": "ion:md-film",
	});
}

export default Component;
