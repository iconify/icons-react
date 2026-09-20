import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k0f9s_bga.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k0f9s_bga"/>`,
		"fallback": "teenyicons:quote-solid",
	});
}

export default Component;
