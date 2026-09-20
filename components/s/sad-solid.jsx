import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c43vspbra.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c43vspbra"/>`,
		"fallback": "rivet-icons:sad-solid",
	});
}

export default Component;
