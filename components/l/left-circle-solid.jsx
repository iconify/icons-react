import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z16gh80jm.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="z16gh80jm"/>`,
		"fallback": "teenyicons:left-circle-solid",
	});
}

export default Component;
