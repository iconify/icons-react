import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mhx94wbqe.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mhx94wbqe"/>`,
		"fallback": "pinhead:phone-down",
	});
}

export default Component;
