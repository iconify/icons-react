import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iztd4sbzc.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="iztd4sbzc"/>`,
		"fallback": "streamline:logout-1-remix",
	});
}

export default Component;
