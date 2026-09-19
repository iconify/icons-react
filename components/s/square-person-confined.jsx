import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u9c5fpbai.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u9c5fpbai"/>`,
		"fallback": "fa7-solid:square-person-confined",
	});
}

export default Component;
