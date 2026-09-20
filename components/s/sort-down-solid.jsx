import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k1i-jqskx.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="k1i-jqskx"/>`,
		"fallback": "teenyicons:sort-down-solid",
	});
}

export default Component;
