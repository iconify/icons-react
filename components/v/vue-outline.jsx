import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a42t3pp8j.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a42t3pp8j"/>`,
		"fallback": "teenyicons:vue-outline",
	});
}

export default Component;
