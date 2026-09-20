import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ogv2_puag.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ogv2_puag"/>`,
		"fallback": "streamline-sharp-color:warp-fish-flat",
	});
}

export default Component;
