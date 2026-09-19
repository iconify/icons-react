import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s6jk8epgs.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s6jk8epgs"/>`,
		"fallback": "fa7-brands:squarespace",
	});
}

export default Component;
