import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pju9uqsjx.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="pju9uqsjx"/>`,
		"fallback": "teenyicons:sort-alphabetically-solid",
	});
}

export default Component;
