import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hswgs7b_p.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hswgs7b_p"/>`,
		"fallback": "qlementine-icons:jump-over-backwards-16",
	});
}

export default Component;
