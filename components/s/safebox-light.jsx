import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/axj7nzn7d.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="axj7nzn7d"/>`,
		"fallback": "selfhst:safebox-light",
	});
}

export default Component;
