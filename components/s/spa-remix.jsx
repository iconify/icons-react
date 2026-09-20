import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l0_n4gb5y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="l0_n4gb5y"/>`,
		"fallback": "streamline-sharp:spa-remix",
	});
}

export default Component;
