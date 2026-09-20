import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lkovylnqj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lkovylnqj"/>`,
		"fallback": "streamline-sharp:layout-window-2",
	});
}

export default Component;
