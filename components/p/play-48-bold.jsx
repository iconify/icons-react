import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zdpu13b1u.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zdpu13b1u"/>`,
		"fallback": "energy-icons:play-48-bold",
	});
}

export default Component;
