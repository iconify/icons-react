import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ff8g36beb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ff8g36beb"/>`,
		"fallback": "griddy-icons:lock-open-alt-02",
	});
}

export default Component;
