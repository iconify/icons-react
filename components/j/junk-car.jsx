import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o-5tx90gh.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o-5tx90gh"/>`,
		"fallback": "temaki:junk-car",
	});
}

export default Component;
