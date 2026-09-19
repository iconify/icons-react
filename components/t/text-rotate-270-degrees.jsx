import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o055zpqmr.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o055zpqmr"/>`,
		"fallback": "fluent-mdl2:text-rotate-270-degrees",
	});
}

export default Component;
