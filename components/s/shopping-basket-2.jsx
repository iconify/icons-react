import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iemz6buzf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iemz6buzf"/>`,
		"fallback": "streamline-sharp:shopping-basket-2",
	});
}

export default Component;
