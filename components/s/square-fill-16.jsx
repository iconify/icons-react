import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/do_oleb4b.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="do_oleb4b"/>`,
		"fallback": "octicon:square-fill-16",
	});
}

export default Component;
