import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aa6c9-14m.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aa6c9-14m"/>`,
		"fallback": "la:redhat",
	});
}

export default Component;
