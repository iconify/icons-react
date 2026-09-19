import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z4_03_bmu.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z4_03_bmu"/>`,
		"fallback": "fa7-brands:rust",
	});
}

export default Component;
