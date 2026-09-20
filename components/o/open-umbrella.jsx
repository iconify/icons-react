import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a1rnzwb0x.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a1rnzwb0x"/>`,
		"fallback": "streamline-flex:open-umbrella",
	});
}

export default Component;
