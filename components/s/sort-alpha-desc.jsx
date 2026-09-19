import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/no9pd3psr.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="no9pd3psr"/>`,
		"fallback": "icomoon-free:sort-alpha-desc",
	});
}

export default Component;
