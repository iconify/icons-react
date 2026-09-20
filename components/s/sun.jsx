import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h0qw0kh2j.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h0qw0kh2j"/>`,
		"fallback": "nimbus:sun",
	});
}

export default Component;
