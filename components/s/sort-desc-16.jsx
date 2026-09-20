import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pb24mfbzn.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pb24mfbzn"/>`,
		"fallback": "octicon:sort-desc-16",
	});
}

export default Component;
