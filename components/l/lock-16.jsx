import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pt58u3bko.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pt58u3bko"/>`,
		"fallback": "octicon:lock-16",
	});
}

export default Component;
