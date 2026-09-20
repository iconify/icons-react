import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m47ivbagz.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m47ivbagz"/>`,
		"fallback": "teenyicons:next-solid",
	});
}

export default Component;
