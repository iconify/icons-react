import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d0b7g1b-d.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d0b7g1b-d"/>`,
		"fallback": "fa7-solid:store-slash",
	});
}

export default Component;
