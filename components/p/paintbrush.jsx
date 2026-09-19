import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zy4pt5qrs.css';

const viewBox = {"width":22,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zy4pt5qrs"/>`,
		"fallback": "et:paintbrush",
	});
}

export default Component;
