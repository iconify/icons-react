import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mm2j-x-gc.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mm2j-x-gc"/>`,
		"fallback": "f7:phone-fill",
	});
}

export default Component;
