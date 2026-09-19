import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lz01n2b6m.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lz01n2b6m"/>`,
		"fallback": "fa6-brands:itch-io",
	});
}

export default Component;
