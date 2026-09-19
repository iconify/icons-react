import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mm_2ikbph.css';

const viewBox = {"width":717,"height":698};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mm_2ikbph"/>`,
		"fallback": "ls:surprise",
	});
}

export default Component;
