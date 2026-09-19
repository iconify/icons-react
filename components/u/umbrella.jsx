import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gikp8hi5j.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gikp8hi5j"/>`,
		"fallback": "carbon:umbrella",
	});
}

export default Component;
