import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zlc9yabgk.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zlc9yabgk"/>`,
		"fallback": "pinhead:person-with-droplets",
	});
}

export default Component;
