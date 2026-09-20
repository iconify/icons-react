import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/erofv-wbt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="erofv-wbt"/>`,
		"fallback": "simple-icons:razer",
	});
}

export default Component;
