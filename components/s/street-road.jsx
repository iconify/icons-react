import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uv_0x6b7g.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uv_0x6b7g"/>`,
		"fallback": "streamline-flex:street-road",
	});
}

export default Component;
