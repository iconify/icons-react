import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fkzvjr0zx.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fkzvjr0zx"/>`,
		"fallback": "pinhead:pin-pad-with-dollar",
	});
}

export default Component;
