import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m6-sa7uud.css';
import '../../css/a/a_ygf-j1c.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="m6-sa7uud"/><path class="a_ygf-j1c"/>`,
		"fallback": "teenyicons:lightning-cable-solid",
	});
}

export default Component;
