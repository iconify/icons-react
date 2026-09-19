import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m4n0e4byc.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m4n0e4byc"/>`,
		"fallback": "fa7-solid:key",
	});
}

export default Component;
