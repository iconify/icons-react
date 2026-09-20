import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qfd9-ubvq.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qfd9-ubvq"/>`,
		"fallback": "pinhead:spoon-and-chopsticks",
	});
}

export default Component;
