import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tu7nefmvr.css';
import '../../css/e/ea0a-8box.css';

const viewBox = {"width":16,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tu7nefmvr"/><path class="ea0a-8box"/>`,
		"fallback": "formkit:link",
	});
}

export default Component;
