import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aao1s0bbb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aao1s0bbb"/>`,
		"fallback": "selfhst:seafile-light",
	});
}

export default Component;
