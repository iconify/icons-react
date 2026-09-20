import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g4r-65a1y.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="g4r-65a1y"/>`,
		"fallback": "qlementine-icons:movie-16",
	});
}

export default Component;
