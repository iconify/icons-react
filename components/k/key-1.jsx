import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uz5clsphv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="uz5clsphv"/>`,
		"fallback": "lineicons:key-1",
	});
}

export default Component;
