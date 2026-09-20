import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mbfrc-9ip.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="mbfrc-9ip"/>`,
		"fallback": "teenyicons:lock-small-solid",
	});
}

export default Component;
