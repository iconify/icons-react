import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k4zcknbxx.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k4zcknbxx"/>`,
		"fallback": "fluent-mdl2:tablet-mode",
	});
}

export default Component;
