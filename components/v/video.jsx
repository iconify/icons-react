import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rxdz69ddd.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rxdz69ddd"/>`,
		"fallback": "radix-icons:video",
	});
}

export default Component;
