import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cz7foyb2n.css';

const viewBox = {"width":10,"height":10};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cz7foyb2n"/>`,
		"fallback": "osmic:memorial-10",
	});
}

export default Component;
