import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qth6jii9b.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qth6jii9b"/>`,
		"fallback": "icomoon-free:point-up",
	});
}

export default Component;
