import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c712ohbrp.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c712ohbrp"/>`,
		"fallback": "fa-solid:phone-slash",
	});
}

export default Component;
