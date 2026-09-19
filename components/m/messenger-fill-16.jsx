import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eqt0-tbhh.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eqt0-tbhh"/>`,
		"fallback": "garden:messenger-fill-16",
	});
}

export default Component;
