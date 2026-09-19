import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xtm7eswgo.css';

const viewBox = {"width":1664,"height":1600};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xtm7eswgo"/>`,
		"fallback": "fa:umbrella",
	});
}

export default Component;
