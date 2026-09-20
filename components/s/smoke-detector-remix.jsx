import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/of_484bvp.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="of_484bvp"/>`,
		"fallback": "streamline:smoke-detector-remix",
	});
}

export default Component;
