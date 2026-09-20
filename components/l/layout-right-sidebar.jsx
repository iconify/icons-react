import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dpoml5myf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dpoml5myf"/>`,
		"fallback": "streamline-sharp:layout-right-sidebar",
	});
}

export default Component;
