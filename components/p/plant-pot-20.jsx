import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i42u6x3xb.css';
import '../../css/s/shy242ktc.css';
import '../../css/k/ktdhr6b1o.css';
import '../../css/h/hvct_1bia.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i42u6x3xb"/><path class="shy242ktc"/><path class="ktdhr6b1o"/><path class="hvct_1bia"/>`,
		"fallback": "energy-icons:plant-pot-20",
	});
}

export default Component;
