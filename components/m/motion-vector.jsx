import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jak2suhvd.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jak2suhvd"/>`,
		"fallback": "at-icons:motion-vector",
	});
}

export default Component;
