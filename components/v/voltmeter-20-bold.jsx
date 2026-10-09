import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k5f709d9b.css';
import '../../css/g/gapv30tqn.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k5f709d9b"/><path class="gapv30tqn"/>`,
		"fallback": "energy-icons:voltmeter-20-bold",
	});
}

export default Component;
