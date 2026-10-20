import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vttjpyben.css';
import '../../css/c/c4mkapibv.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vttjpyben"/><path class="c4mkapibv"/>`,
		"fallback": "energy-icons:pen-sparkle-20-bold",
	});
}

export default Component;
