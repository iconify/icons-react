import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/enqwc4bvf.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="enqwc4bvf"/>`,
		"fallback": "streamline-flex:user-king-crown-remix",
	});
}

export default Component;
