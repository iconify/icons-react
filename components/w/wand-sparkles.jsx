import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eahi3-bmn.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eahi3-bmn"/>`,
		"fallback": "fa6-solid:wand-sparkles",
	});
}

export default Component;
