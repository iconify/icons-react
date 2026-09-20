import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p6jc2nbha.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p6jc2nbha"/>`,
		"fallback": "simple-icons:nim",
	});
}

export default Component;
