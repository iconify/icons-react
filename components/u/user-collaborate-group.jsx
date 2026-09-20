import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/poifqk86i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="poifqk86i"/>`,
		"fallback": "streamline-sharp:user-collaborate-group",
	});
}

export default Component;
