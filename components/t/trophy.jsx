import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l50riizbb.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l50riizbb"/>`,
		"fallback": "icons8:trophy",
	});
}

export default Component;
