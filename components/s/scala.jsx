import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/srm-1uqad.css';
import '../../css/s/s6jqjmbla.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="srm-1uqad"/><path class="s6jqjmbla"/>`,
		"fallback": "devicon:scala",
	});
}

export default Component;
