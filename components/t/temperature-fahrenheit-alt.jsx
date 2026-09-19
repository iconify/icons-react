import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ovmg3j_6y.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ovmg3j_6y"/>`,
		"fallback": "carbon:temperature-fahrenheit-alt",
	});
}

export default Component;
