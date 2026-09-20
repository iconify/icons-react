import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p5e1c7d7a.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="p5e1c7d7a"/>`,
		"fallback": "streamline-color:return-2-flat",
	});
}

export default Component;
