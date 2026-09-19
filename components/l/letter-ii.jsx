import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fq3_z1b5d.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fq3_z1b5d"/>`,
		"fallback": "carbon:letter-ii",
	});
}

export default Component;
