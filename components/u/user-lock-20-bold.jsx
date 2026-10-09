import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dny5eubpk.css';
import '../../css/l/l2cqzcbfa.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dny5eubpk"/><path class="l2cqzcbfa"/>`,
		"fallback": "energy-icons:user-lock-20-bold",
	});
}

export default Component;
