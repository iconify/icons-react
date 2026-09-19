import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f3fi1ehfc.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f3fi1ehfc"/>`,
		"fallback": "garden:smile-slight-fill-16",
	});
}

export default Component;
