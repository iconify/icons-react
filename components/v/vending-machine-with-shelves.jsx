import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gy6ak9tth.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gy6ak9tth"/>`,
		"fallback": "pinhead:vending-machine-with-shelves",
	});
}

export default Component;
