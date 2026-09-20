import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qnt0b3bzv.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qnt0b3bzv"/>`,
		"fallback": "pinhead:saguaro",
	});
}

export default Component;
