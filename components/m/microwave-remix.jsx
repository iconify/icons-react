import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hm3qczb-m.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="hm3qczb-m"/>`,
		"fallback": "streamline:microwave-remix",
	});
}

export default Component;
