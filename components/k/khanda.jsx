import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/olyzb4b8p.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="olyzb4b8p"/>`,
		"fallback": "fa7-solid:khanda",
	});
}

export default Component;
