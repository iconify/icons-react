import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pn6i8jbmz.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pn6i8jbmz"/>`,
		"fallback": "fluent-mdl2:rewind-point-five-x",
	});
}

export default Component;
