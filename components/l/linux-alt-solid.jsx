import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kd-74fbyn.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="kd-74fbyn"/>`,
		"fallback": "teenyicons:linux-alt-solid",
	});
}

export default Component;
