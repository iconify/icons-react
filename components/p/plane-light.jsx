import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ah_305bbj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ah_305bbj"/>`,
		"fallback": "selfhst:plane-light",
	});
}

export default Component;
