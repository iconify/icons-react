import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sw96g0b-t.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sw96g0b-t"/>`,
		"fallback": "selfhst:llama-cpp-dark",
	});
}

export default Component;
