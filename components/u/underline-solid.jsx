import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m9705yb5k.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="m9705yb5k"/>`,
		"fallback": "teenyicons:underline-solid",
	});
}

export default Component;
