import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kzta2cbuv.css';

const viewBox = {"width":496,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kzta2cbuv"/>`,
		"fallback": "fa-regular:meh-rolling-eyes",
	});
}

export default Component;
