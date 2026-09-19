import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/co2cki_7i.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="co2cki_7i"/>`,
		"fallback": "f7:person-badge-minus-fill",
	});
}

export default Component;
