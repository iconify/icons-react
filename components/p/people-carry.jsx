import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pvlvc6h1c.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pvlvc6h1c"/>`,
		"fallback": "fa7-solid:people-carry",
	});
}

export default Component;
