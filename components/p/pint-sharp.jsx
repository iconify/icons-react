import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vdsiym1km.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vdsiym1km"/>`,
		"fallback": "famicons:pint-sharp",
	});
}

export default Component;
