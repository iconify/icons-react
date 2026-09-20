import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s87_q_bdq.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s87_q_bdq"/>`,
		"fallback": "octicon:unverified-16",
	});
}

export default Component;
