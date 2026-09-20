import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lnpjfhobm.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lnpjfhobm"/>`,
		"fallback": "pinhead:vending-machine-with-exclamation-point",
	});
}

export default Component;
