import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fly7y8bzc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fly7y8bzc"/>`,
		"fallback": "heroicons:lifebuoy-solid",
	});
}

export default Component;
