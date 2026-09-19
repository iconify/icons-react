import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t8ux81thv.css';

const viewBox = {"width":370,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t8ux81thv"/>`,
		"fallback": "file-icons:pickle",
	});
}

export default Component;
