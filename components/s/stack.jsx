import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n5gajy46w.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n5gajy46w"/>`,
		"fallback": "icomoon-free:stack",
	});
}

export default Component;
