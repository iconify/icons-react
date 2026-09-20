import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xu9lgye8j.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xu9lgye8j"/>`,
		"fallback": "pinhead:pin-pad-with-euro",
	});
}

export default Component;
