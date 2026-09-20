import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n56hcp8oe.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="n56hcp8oe"/>`,
		"fallback": "streamline-flex:texture-remix",
	});
}

export default Component;
