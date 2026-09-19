import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dh-iazb7d.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dh-iazb7d"/>`,
		"fallback": "fa7-solid:swimmer",
	});
}

export default Component;
