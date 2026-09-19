import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/titw2rw2j.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="titw2rw2j"/>`,
		"fallback": "academicons:scirate-square",
	});
}

export default Component;
