import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k-ie3-blj.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="k-ie3-blj"/>`,
		"fallback": "streamline:school-bus-side-remix",
	});
}

export default Component;
