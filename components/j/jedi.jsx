import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zfo9l1-9a.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zfo9l1-9a"/>`,
		"fallback": "fa6-solid:jedi",
	});
}

export default Component;
