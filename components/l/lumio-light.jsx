import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o9686ab6o.css';
import '../../css/o/o4k3kffuo.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o9686ab6o"/><path class="o4k3kffuo"/>`,
		"fallback": "selfhst:lumio-light",
	});
}

export default Component;
