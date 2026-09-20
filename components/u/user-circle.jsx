import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gnm3uwu-x.css';
import '../../css/w/wwvjbde6h.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gnm3uwu-x"/><path class="wwvjbde6h"/>`,
		"fallback": "nimbus:user-circle",
	});
}

export default Component;
