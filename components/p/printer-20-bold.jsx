import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jrfvdrbva.css';
import '../../css/a/avxyqj62k.css';
import '../../css/h/hy5oa6obz.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jrfvdrbva"/><path class="avxyqj62k"/><path class="hy5oa6obz"/>`,
		"fallback": "energy-icons:printer-20-bold",
	});
}

export default Component;
