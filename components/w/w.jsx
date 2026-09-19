import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/acodatbnj.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="acodatbnj"/>`,
		"fallback": "fa6-solid:w",
	});
}

export default Component;
