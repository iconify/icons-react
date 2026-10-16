import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ey18pvvad.css';
import '../../css/c/cbw0uj2ck.css';
import '../../css/j/jeyqzjnhx.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ey18pvvad"/><path class="cbw0uj2ck"/><path class="jeyqzjnhx"/>`,
		"fallback": "energy-icons:nuclear-plant-alert-20-bold",
	});
}

export default Component;
