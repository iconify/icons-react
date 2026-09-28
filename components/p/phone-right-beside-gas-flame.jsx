import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jc0bsybnx.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jc0bsybnx"/>`,
		"fallback": "pinhead:phone-right-beside-gas-flame",
	});
}

export default Component;
