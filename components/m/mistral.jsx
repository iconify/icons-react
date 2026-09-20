import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hmxqd5bxx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hmxqd5bxx"/>`,
		"fallback": "pixel:mistral",
	});
}

export default Component;
