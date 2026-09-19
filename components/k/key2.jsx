import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ohw1k-bpo.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ohw1k-bpo"/>`,
		"fallback": "icomoon-free:key2",
	});
}

export default Component;
