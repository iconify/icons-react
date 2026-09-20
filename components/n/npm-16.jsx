import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dumfirbrq.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dumfirbrq"/>`,
		"fallback": "nonicons:npm-16",
	});
}

export default Component;
