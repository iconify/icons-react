import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/khutn8b6n.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="khutn8b6n"/>`,
		"fallback": "carbon:user-service-desk",
	});
}

export default Component;
