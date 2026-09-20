import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qb711uq0x.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qb711uq0x"/>`,
		"fallback": "pinhead:pin-pad-with-pound",
	});
}

export default Component;
