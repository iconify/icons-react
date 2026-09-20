import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mlk9qlb5u.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="mlk9qlb5u"/>`,
		"fallback": "teenyicons:nodejs-solid",
	});
}

export default Component;
