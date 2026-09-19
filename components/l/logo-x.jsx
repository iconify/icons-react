import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gprqh4byt.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gprqh4byt"/>`,
		"fallback": "ion:logo-x",
	});
}

export default Component;
