import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l1eoneb0f.css';

const viewBox = {"width":767,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l1eoneb0f"/>`,
		"fallback": "whh:rouble",
	});
}

export default Component;
