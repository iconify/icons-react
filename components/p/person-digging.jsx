import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vfo43fa_a.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vfo43fa_a"/>`,
		"fallback": "fa7-solid:person-digging",
	});
}

export default Component;
