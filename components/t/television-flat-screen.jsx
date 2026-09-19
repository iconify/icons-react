import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eu11l_tog.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="eu11l_tog"/>`,
		"fallback": "at-icons:television-flat-screen",
	});
}

export default Component;
