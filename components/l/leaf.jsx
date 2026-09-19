import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rc2w2q85y.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rc2w2q85y"/>`,
		"fallback": "icomoon-free:leaf",
	});
}

export default Component;
