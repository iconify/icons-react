import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/arrw2cc3f.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="arrw2cc3f"/>`,
		"fallback": "fa7-solid:venus-double",
	});
}

export default Component;
