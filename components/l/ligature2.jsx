import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r-z3hibqq.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r-z3hibqq"/>`,
		"fallback": "icomoon-free:ligature2",
	});
}

export default Component;
