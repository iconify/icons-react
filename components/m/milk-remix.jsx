import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dzs8krkut.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="dzs8krkut"/>`,
		"fallback": "streamline-sharp:milk-remix",
	});
}

export default Component;
