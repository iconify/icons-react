import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sg3-g0s0q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="sg3-g0s0q"/>`,
		"fallback": "streamline-sharp:layout-right-sidebar-remix",
	});
}

export default Component;
